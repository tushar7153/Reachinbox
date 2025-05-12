"use client"

import type { Thread } from "@/types/thread"

interface LeadDetailsProps {
  thread: Thread | null
}

export default function LeadDetails({ thread }: LeadDetailsProps) {
  if (!thread) return null

  return (
    <div className="w-full md:w-1/4 bg-white dark:bg-gray-900 border-l border-gray-300 dark:border-gray-800 overflow-y-auto">
      <div className="p-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 mb-4 border border-gray-300 dark:border-gray-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Lead Details</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Name</span>
              <span className="text-gray-900 dark:text-white">{thread.from.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Contact No</span>
              <span className="text-gray-900 dark:text-white">+54-9062827869</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Email ID</span>
              <span className="text-gray-900 dark:text-white">{thread.from.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">LinkedIn</span>
              <span className="text-gray-900 dark:text-white">linkedin.com/in/timvadde/</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Company Name</span>
              <span className="text-gray-900 dark:text-white">Reachinbox</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Activities</h2>

          <div className="mb-4">
            <h3 className="text-gray-900 dark:text-white font-medium mb-2">Campaign Name</h3>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-400">3 Steps</span>
              <span className="text-gray-600 dark:text-gray-400">5 Days in Sequence</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-white">
                  <EmailIcon />
                </div>
                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-medium">Step 1: Email</h4>
                <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <SentIcon className="mr-2" />
                  Sent 3rd, Feb
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-white">
                  <EmailIcon />
                </div>
                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-medium">Step 2: Email</h4>
                <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <OpenedIcon className="mr-2" />
                  Opened 5th, Feb
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-white">
                  <EmailIcon />
                </div>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-medium">Step 3: Email</h4>
                <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <OpenedIcon className="mr-2" />
                  Opened 5th, Feb
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  )
}

function SentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 10 4 15 9 20"></polyline>
      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
    </svg>
  )
}

function OpenedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
}
