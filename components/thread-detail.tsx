"use client"

import type React from "react"

import { useRef } from "react"
import { format } from "date-fns"
import { Reply, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Thread } from "@/types/thread"
import ReplyEditor from "@/components/reply-editor"

interface ThreadDetailProps {
  thread: Thread | null
  isReplyOpen: boolean
  onOpenReply: () => void
  onCloseReply: () => void
  onDeleteThread: (threadId: string) => void
  onSendReply: (replyData: {
    to: string
    from: string
    subject: string
    body: string
  }) => void
}

export default function ThreadDetail({
  thread,
  isReplyOpen,
  onOpenReply,
  onCloseReply,
  onDeleteThread,
  onSendReply,
}: ThreadDetailProps) {
  const replyRef = useRef<HTMLDivElement>(null)

  if (!thread) {
    return (
      <div className="flex-1 p-8 flex items-center justify-center bg-white dark:bg-black">
        <p className="text-gray-600 dark:text-gray-400">Select a thread to view details</p>
      </div>
    )
  }

  const handleDelete = () => {
    onDeleteThread(thread.id)
  }

  const handleReply = () => {
    onOpenReply()
    // Scroll to reply editor after it renders
    setTimeout(() => {
      replyRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleSendReply = (body: string) => {
    onSendReply({
      from: "peter@reachinbox.com",
      to: thread.from.email,
      subject: `Re: ${thread.subject}`,
      body,
    })
  }

  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="p-4 border-b border-gray-300 dark:border-gray-800 flex justify-between items-center">
        <div>
          <h2 className="text-gray-900 dark:text-white font-medium">{thread.from.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{thread.from.email}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-yellow-100 dark:bg-yellow-900/50 border-yellow-300 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900"
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Meeting Completed
            <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Move
            <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-2"
          >
            <DotsIcon />
          </Button>
        </div>
      </div>

      <div className="p-4">
        {isReplyOpen ? (
          <div ref={replyRef} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Reply</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                onClick={onCloseReply}
              >
                <X size={18} />
              </Button>
            </div>
            <ReplyEditor
              recipientEmail={thread.from.email}
              recipientName={thread.from.name}
              subject={`Re: ${thread.subject}`}
              onSend={handleSendReply}
            />
          </div>
        ) : (
          <div className="mb-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 border border-gray-300 dark:border-gray-800">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{thread.subject}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {format(new Date(thread.date), "dd MMM yyyy • HH:mm'AM'")}
                </span>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  from : {thread.from.email} {thread.cc ? `cc : ${thread.cc.map((c) => c.email).join(", ")}` : ""}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  to : {thread.to.map((t) => t.email).join(", ")}
                </div>
              </div>
              <div className="text-gray-900 dark:text-white whitespace-pre-line">{thread.body}</div>
              <div className="mt-4 flex justify-end">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleReply}
                >
                  <Reply size={16} className="mr-2" />
                  Reply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}

function DotsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="19" cy="12" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
    </svg>
  )
}
