"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

interface OneboxLayoutProps {
  children: React.ReactNode
}

export default function OneboxLayout({ children }: OneboxLayoutProps) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const isMobile = useMobile()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/")
  }

  // Close sidebar when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(false)
    }
  }, [isMobile])

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-200">
      {/* Header */}
      <header className="bg-red-400 py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">One box</h1>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <div className="p-6">
        <div className="text-gray-600 mb-2">Onebox</div>
        <div className="bg-white dark:bg-gray-800 w-full border border-gray-300 dark:border-gray-800">
          <div className="flex">
            {/* Left sidebar with navigation */}
            <div className="w-16 bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-180px)] flex flex-col border-r border-gray-300 dark:border-gray-800">
              <div className="p-3 border-b border-gray-300 dark:border-gray-800">
                <div className="bg-gray-900 dark:bg-white text-white dark:text-black w-8 h-8 flex items-center justify-center font-bold">
                  M
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <button className="p-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border-l-2 border-transparent hover:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </button>
                <button className="p-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border-l-2 border-transparent hover:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </button>
                <button className="p-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border-l-2 border-transparent hover:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <button className="p-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border-l-2 border-transparent hover:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
                <button className="p-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border-l-2 border-transparent hover:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="relative p-4">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    2
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <button className="p-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border-l-2 border-transparent hover:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                  AS
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
