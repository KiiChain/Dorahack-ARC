import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { report } = await req.json();

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    // Set fonts and text formatting
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontSize = 12;

    let yPosition = 750; // Start position for the text

    // Add content to the PDF
    for (let i = 0; i < report.length; i++) {
      const section = report[i];
      const sectionTitle = Object.keys(section)[0]; // e.g., "Summary", "Vulnerabilities", etc.
      const sectionContent = section[sectionTitle]; // The actual text content

      // Add section title
      page.drawText(sectionTitle, {
        x: 50,
        y: yPosition,
        size: 14,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      });
      yPosition -= 20; // Move down

      // Add section content (wrap text if too long)
      const contentLines = sectionContent.match(/.{1,80}/g) || []; // Split content into lines of 80 characters
      for (const line of contentLines) {
        page.drawText(line, {
          x: 50,
          y: yPosition,
          size: fontSize,
          font: timesRomanFont,
          color: rgb(0, 0, 0),
        });
        yPosition -= 20; // Move down for the next line
      }
      yPosition -= 30; // Add extra space between sections
    }

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Serve the PDF for download using NextResponse
    const headers = new Headers({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="vulnerability-report.pdf"',
    });

    // Return the PDF as a NextResponse
    return new NextResponse(pdfBytes, { headers });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
