import { NextResponse } from "next/server"

import { htmlToText } from "html-to-text"
import { marked } from "marked"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

const PAGE_WIDTH = 595.276 // A4 width in points
const PAGE_HEIGHT = 841.89 // A4 height in points
const MARGIN = 50 // Margin in points
const LINE_HEIGHT = 14 // Line height in points
const FONT_SIZE = 12 // Font size in points

export const POST = async (req: Request) => {
  try {
    const { report, file } = await req.json()

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()

    const coverPage = pdfDoc.addPage([600, 850])
    const { width, height } = coverPage.getSize()

    coverPage.drawText("Audit Report: " + (file ?? "contract"), {
      x: width / 2 - 125,
      y: height / 2 + 25,
      size: 24,
      color: rgb(0, 0, 0),
      maxWidth: width - 100,
    })

    const markdownContent = `
# Summary:
        
${report?.[0]?.summary ?? "No summary provided."}

# Vulnerabilities:
        
${report?.[0]?.vulnerabilities ?? "No vulnerabilities found."}

# Optimizations:

${report?.[0]?.optimizations ?? "No optimizations suggested."}

# Additional Information:
        
${report?.[0]?.additional ?? "No additional information."}
      `

    // Convert Markdown to HTML
    const htmlContent = await marked(markdownContent)

    // Convert HTML to plain text
    const formattedText = htmlToText(htmlContent, {
      wordwrap: 130,
    })

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const lines = formattedText.split("\n")

    let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
    let yPosition = PAGE_HEIGHT - MARGIN

    for (const line of lines) {
      const textWidth = font.widthOfTextAtSize(line, FONT_SIZE)

      // Check if the line fits on the current page
      if (textWidth > PAGE_WIDTH - 2 * MARGIN) {
        const words = line.split(" ")
        let currentLine = ""

        for (const word of words) {
          const newLine = currentLine ? `${currentLine} ${word}` : word
          const newLineWidth = font.widthOfTextAtSize(newLine, FONT_SIZE)

          if (newLineWidth > PAGE_WIDTH - 2 * MARGIN) {
            // Line is too wide, add current line to page and start a new line
            currentPage.drawText(currentLine, {
              x: MARGIN,
              y: yPosition,
              size: FONT_SIZE,
              font,
            })

            yPosition -= LINE_HEIGHT

            if (yPosition < MARGIN) {
              // Add a new page if we run out of space
              currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
              yPosition = PAGE_HEIGHT - MARGIN
            }

            currentLine = word
          } else {
            currentLine = newLine
          }
        }

        if (currentLine) {
          currentPage.drawText(currentLine, {
            x: MARGIN,
            y: yPosition,
            size: FONT_SIZE,
            font,
          })

          yPosition -= LINE_HEIGHT

          if (yPosition < MARGIN) {
            currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
            yPosition = PAGE_HEIGHT - MARGIN
          }
        }
      } else {
        // Draw text on the current page
        currentPage.drawText(line, {
          x: MARGIN,
          y: yPosition,
          size: FONT_SIZE,
          font,
        })

        yPosition -= LINE_HEIGHT

        if (yPosition < MARGIN) {
          // Add a new page if we run out of space
          currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
          yPosition = PAGE_HEIGHT - MARGIN
        }
      }
    }

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save()

    // Serve the PDF for download using NextResponse
    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=" + (file ?? "contract") + "_audit_report.pdf",
    })

    // Return the PDF as a NextResponse
    return new NextResponse(pdfBytes, { headers })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
