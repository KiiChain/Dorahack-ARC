"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"

import { File } from "@/interface/custom/folder-tree/folder-tree"
import Editor, { useMonaco } from "@monaco-editor/react"

import { CircularSpinner } from "@/ui/circular-spinner"
const cacheSize = 10,
  refreshInterval = 500
// useCompletion Hook
import { useCompletion } from "ai/react"

import { Content } from "@google/generative-ai"

import { CompletionFormatter } from "@/utils/formatter"
import { GenerateInstructions } from "@/utils/prompt"
export const MonacoEditor = ({
  selectedFile,
  handleFileUpdate,
}: {
  selectedFile: File
  handleFileUpdate: (updatedFile: File) => void
}) => {
  const code = selectedFile.content
  let language = selectedFile.name.split(".").pop()

  if (language === "js" || language === "jsx") language = "javascript"
  else if (language === "ts" || language === "tsx") language = "typescript"
  const monaco = useMonaco()
  const editorRef = useRef<ITemporaryVariable>(null)

  // Refs to manage fetching and timing of suggestions
  const fetchSuggestionsIntervalRef = useRef<number | undefined>(undefined)
  const timeoutRef = useRef<number | undefined>(undefined)

  // State to cache suggestions received from the AI completion API
  const [cachedSuggestions, setCachedSuggestions] = useState<ITemporaryVariable[]>([])

  const { completion, complete } = useCompletion({
    api: "/api/completion",
  })

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      // Clear the interval and timeout when the component is unmounted
      window.clearInterval(fetchSuggestionsIntervalRef.current)
      window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const debouncedSuggestions = useCallback(() => {
    // Access the current model (document) of the editor
    const model = monaco?.editor.getModels()[0]

    if (!model || !model.getValue()) {
      setCachedSuggestions([])
      return
    }

    const position = editorRef.current.getPosition()
    const currentLine = model.getLineContent(position.lineNumber)
    const offset = model.getOffsetAt(position)
    const textBeforeCursor = model.getValue().substring(0, offset - currentLine.length)
    const textBeforeCursorOnCurrentLine = currentLine.substring(0, position.column - 1)

    if (!textBeforeCursor) return
    // [
    //   {
    //     role:"user",
    //     parts:[
    //       {text:"plese chal ja"}
    //     ]
    //   }
    // ]
    const messages: Content[] = [
      GenerateInstructions(language ?? "solidity"),
      {
        parts: [{ text: textBeforeCursor }],
        role: "user",
      },
      {
        parts: [{ text: textBeforeCursorOnCurrentLine }],
        role: "user",
      },
    ]

    // Call the completion API and handle the response
    complete("", {
      body: {
        messages,
      },
    })
      .then((newCompletion) => {
        if (newCompletion) {
          // Construct a new suggestion object based on the API response
          console.log("this is the response from ai ", newCompletion)
          const newSuggestion = {
            insertText: newCompletion,
            range: {
              startLineNumber: position.lineNumber,
              startColumn: position.column,
              endLineNumber:
                // Calculate the number of new lines in the completion text and add it to the current line number
                position.lineNumber + (newCompletion.match(/\n/g) || []).length,
              // If the suggestion is on the same line, return the length of the completion text
              endColumn: position.column + newCompletion.length,
            },
          }
          console.log("newq suggestion ", newSuggestion)
          // Update the cached suggestions with the new suggestion (up to the cache size limit)
          // Cache size is set to 6 by default, which I found to be a good balance between performance and usability
          setCachedSuggestions((prev) => [...prev, newSuggestion].slice(-cacheSize))
        }
      })
      .catch((error) => {
        console.error("error", error)
      })
  }, [monaco, complete, setCachedSuggestions, language, cacheSize])

  const startOrResetFetching = useCallback(() => {
    // Check if the fetching interval is not already set
    if (fetchSuggestionsIntervalRef.current === undefined) {
      // Immediately invoke suggestions once
      debouncedSuggestions()

      // Set an interval to fetch suggestions every refresh interval
      // (default is 500ms which seems to align will with the
      // average typing speed and latency of OpenAI API calls)
      fetchSuggestionsIntervalRef.current = setInterval(debouncedSuggestions, refreshInterval) as unknown as number // Cast to number as setInterval returns a NodeJS.Timeout in Node environments
    }

    // Clear any previous timeout to reset the timer
    clearTimeout(timeoutRef.current)

    // Set a new timeout to stop fetching suggestions if no typing occurs for 2x the refresh interval
    timeoutRef.current = setTimeout(() => {
      if (fetchSuggestionsIntervalRef.current !== undefined) {
        window.clearInterval(fetchSuggestionsIntervalRef.current)
        fetchSuggestionsIntervalRef.current = undefined
      }
    }, refreshInterval * 2) as unknown as number
  }, [debouncedSuggestions, refreshInterval])

  // Use the editor change event to trigger fetching of suggestions
  const handleEditorChange = useCallback(
    (e: string | undefined) => {
      console.log(e)
      const x = selectedFile
      x.content = e ?? ""
      handleFileUpdate(x)
      startOrResetFetching()
    },
    [startOrResetFetching]
  )

  // useEffect(() => {
  //   if (monaco && editorRef.current && errors.length > 0) {
  //     const model = editorRef.current.getModel()

  //     // Convert the errors into Monaco editor markers
  //     const markers = errors.map((error) => ({
  //       startLineNumber: model.getPositionAt(error.sourceLocation.start).lineNumber,
  //       startColumn: model.getPositionAt(error.sourceLocation.start).column,
  //       endLineNumber: model.getPositionAt(error.sourceLocation.end).lineNumber,
  //       endColumn: model.getPositionAt(error.sourceLocation.end).column,
  //       message: error.formattedMessage,
  //       severity: monaco.MarkerSeverity.Error,
  //     }))

  //     // Apply the markers to the model
  //     monaco.editor.setModelMarkers(model, 'owner', markers)
  //   }
  // }, [monaco, errors])
  useEffect(() => {
    if (!monaco) return

    // Register a provider for inline completions specific to the language used in the editor
    const provider = monaco.languages.registerInlineCompletionsProvider(language ?? "solidity", {
      provideInlineCompletions: async (model, position) => {
        // Filter cached suggestions to include only those that start with the current word at the cursor position
        const suggestions = cachedSuggestions.filter((suggestion) =>
          suggestion.insertText.startsWith(model.getValueInRange(suggestion.range))
        )

        // Further filter suggestions to ensure they are relevant to the current cursor position within the line
        const localSuggestions = suggestions.filter(
          (suggestion) =>
            suggestion.range.startLineNumber == position.lineNumber &&
            suggestion.range.startColumn >= position.column - 3
        )

        // Avoid providing suggestions if the character before the cursor is not a letter, number, or whitespace
        if (!/[a-zA-Z0-9\s]/.test(model.getValue().charAt(position.column - 2))) {
          return {
            items: [],
          }
        }
        console.log("yha tka aa rha ")
        console.log("whatever come here is  suggestin", localSuggestions)
        return {
          items: localSuggestions.map((suggestion) =>
            new CompletionFormatter(model, position).format(suggestion.insertText, suggestion.range)
          ),
        }
      },
      freeInlineCompletions: () => {},
    })

    return () => provider.dispose()
  }, [monaco, completion, stop, cachedSuggestions, language])

  return (
    <div className="m-0 h-full w-full text-[16px]">
      <Editor
        // height="80vh"
        language={language}
        value={code}
        theme="vs-dark"
        options={{
          autoClosingBrackets: "never",
          autoClosingQuotes: "never",
          formatOnType: true,
          formatOnPaste: true,
          trimAutoWhitespace: true,
        }}
        onChange={(val) => handleEditorChange(val)}
        onMount={(editor) => {
          editorRef.current = editor
        }}
        loading={<CircularSpinner />}
      />
    </div>
  )
}
