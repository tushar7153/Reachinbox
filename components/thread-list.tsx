"use client"

import { useState } from "react"
import { format } from "date-fns"
import type { Thread } from "@/types/thread"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronDown, RefreshCw } from "lucide-react"

interface ThreadListProps {
  threads: Thread[]
  selectedThreadId: string | null
  onSelectThread: (threadId: string) => void
  isLoading: boolean
}

export default function ThreadList({ threads, selectedThreadId, onSelectThread, isLoading }: ThreadListProps) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")

  if (isLoading) {
    return (
      <div className="w-full md:w-1/3 border-r border-gray-300 dark:border-gray-800 overflow-y-auto bg-white dark:bg-gray-900">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-blue-500">All Inbox(s)</h2>
            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <RefreshCw size={16} />
            </button>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">25/25 Inboxes selected</div>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-gray-900 dark:text-white"
            />
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="mb-4 p-3 rounded-md border border-gray-300 dark:border-gray-800">
              <Skeleton className="h-6 w-3/4 mb-2 bg-gray-200 dark:bg-gray-800" />
              <Skeleton className="h-4 w-full mb-1 bg-gray-200 dark:bg-gray-800" />
              <Skeleton className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full md:w-1/3 border-r border-gray-300 dark:border-gray-800 overflow-y-auto bg-white dark:bg-gray-900">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-blue-500">All Inbox(s)</h2>
            <ChevronDown className="ml-1 h-4 w-4 text-blue-500" />
          </div>
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <RefreshCw size={16} />
          </button>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">25/25 Inboxes selected</div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-gray-900 dark:text-white"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white rounded-md px-2 py-1 text-sm mr-2">26</div>
            <span className="text-gray-900 dark:text-white">New Replies</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-900 dark:text-white mr-2">Newest</span>
            <ChevronDown className="h-4 w-4 text-gray-900 dark:text-white" />
          </div>
        </div>

        {threads.length === 0 ? (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">No threads found</div>
        ) : (
          <div className="space-y-2">
            {threads.map((thread) => (
              <div
                key={thread.id}
                className={`p-3 rounded-md cursor-pointer border ${
                  selectedThreadId === thread.id
                    ? "border-blue-500 bg-blue-50 dark:bg-gray-800"
                    : "border-gray-300 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => onSelectThread(thread.id)}
              >
                <div className="flex items-center mb-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <h3 className="text-sm font-medium truncate text-gray-900 dark:text-white">{thread.from.email}</h3>
                  <span className="ml-auto text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {thread.date.includes("Mar") ? thread.date : format(new Date(thread.date), "HH:mm")}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{thread.snippet}</p>

                <div className="flex items-center mt-2">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusClass(
                      thread.status,
                    )}`}
                  >
                    {thread.status}
                  </span>
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                    {thread.campaign}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function getStatusClass(status: string): string {
  switch (status) {
    case "Interested":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Closed":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "Meeting Booked":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "Meeting Completed":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    default:
      return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  }
}
