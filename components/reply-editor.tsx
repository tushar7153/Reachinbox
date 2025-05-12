"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Eye, Bold, Italic, Link, ImageIcon, Smile, Users, Code } from "lucide-react"

interface ReplyEditorProps {
  recipientEmail: string
  recipientName: string
  subject: string
  onSend: (body: string) => void
}

export default function ReplyEditor({ recipientEmail, recipientName, subject, onSend }: ReplyEditorProps) {
  const [content, setContent] = useState("")
  const [showVariables, setShowVariables] = useState(false)
  const editorRef = useRef<HTMLDivElement>(null)

  const variables = [
    { name: "First Name", value: "{{first_name}}" },
    { name: "Last Name", value: "{{last_name}}" },
    { name: "Company", value: "{{company}}" },
    { name: "Position", value: "{{position}}" },
    { name: "Industry", value: "{{industry}}" },
  ]

  const handleInsertVariable = (variable: string) => {
    setContent((prev) => prev + " " + variable + " ")
    setShowVariables(false)
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }

  const handleSend = () => {
    // Create HTML content from the editor
    const htmlContent = `<div>${content.replace(/\n/g, "<br>")}</div>`
    onSend(htmlContent)
  }

  return (
    <div className="border border-gray-300 dark:border-gray-800 rounded-md overflow-hidden bg-white dark:bg-black">
      <div className="bg-gray-50 dark:bg-gray-900 p-3 border-b border-gray-300 dark:border-gray-800">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-medium mr-1">To:</span>
          <span>{recipientEmail}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-medium mr-1">From:</span>
          <span>peter@reachinbox.com</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium mr-1">Subject:</span>
          <span>{subject}</span>
        </div>
      </div>

      <div
        ref={editorRef}
        className="p-3 min-h-[200px] focus:outline-none bg-white dark:bg-black text-gray-900 dark:text-white"
        contentEditable
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="bg-white dark:bg-black p-3 border-t border-gray-300 dark:border-gray-800 flex justify-between">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setShowVariables(!showVariables)}
          >
            Variables
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          {showVariables && (
            <div className="absolute mt-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10">
              <div className="p-1">
                {variables.map((variable) => (
                  <Button
                    key={variable.value}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleInsertVariable(variable.value)}
                  >
                    {variable.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Eye className="mr-1 h-4 w-4" />
            Preview Email
          </Button>

          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Link className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Smile className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Users className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
          <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSend}>
            Send
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
