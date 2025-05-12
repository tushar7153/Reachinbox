"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleGoogleSignUp = async () => {
    setIsLoading(true)

    try {
      // In a real app, we would initiate Google OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store auth token in localStorage or cookies
      localStorage.setItem("isAuthenticated", "true")

      // Show success toast
      toast({
        title: "Authentication successful",
        description: "Redirecting to dashboard...",
      })

      // Redirect to Google login page
      router.push("/google-login")
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "Please try again",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateAccount = async () => {
    setIsLoading(true)

    try {
      // In a real app, we would create an account
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store auth token in localStorage or cookies
      localStorage.setItem("isAuthenticated", "true")

      // Show success toast
      toast({
        title: "Account created",
        description: "Redirecting to dashboard...",
      })

      // Redirect to Google login page
      router.push("/google-login")
    } catch (error) {
      toast({
        title: "Account creation failed",
        description: "Please try again",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignIn = () => {
    // In a real app, we would show a sign-in form
    // For now, just simulate the sign-in
    handleGoogleSignUp()
  }

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Create a new account</h1>

      <Button
        variant="outline"
        className="w-full bg-transparent border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
        onClick={handleGoogleSignUp}
        disabled={isLoading}
      >
        <svg
          className="mr-2 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign Up with Google
      </Button>

      <div className="pt-4">
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleCreateAccount}
          disabled={isLoading}
        >
          Create an Account
        </Button>
      </div>

      <div className="text-center text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <button className="text-blue-500 hover:underline font-medium" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  )
}
