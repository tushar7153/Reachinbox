"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function GoogleLoginPage() {
  const router = useRouter()

  useEffect(() => {
    // Simulate Google OAuth flow
    const timer = setTimeout(() => {
      // In a real app, we would handle the OAuth callback
      // and store the authentication token
      router.push("/onebox")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        <h1 className="text-2xl font-bold text-white">Connecting to Google...</h1>
        <p className="text-gray-400">Please wait while we authenticate your Google account</p>
      </div>
    </div>
  )
}
