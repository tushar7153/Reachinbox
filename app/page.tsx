import LoginForm from "@/components/login-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-200 dark:bg-gray-200">
      {/* Header */}
      <header className="bg-red-400 py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Login / Add Mail</h1>
        <ThemeToggle />
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-screen-lg">
          <div className="text-gray-600 mb-2">Login</div>
          <div className="bg-white dark:bg-black w-full h-[600px] flex flex-col border border-gray-300 dark:border-gray-800">
            {/* Logo */}
            <div className="flex justify-center py-6 border-b border-gray-300 dark:border-gray-800">
              <div className="flex items-center">
                <span className="text-gray-900 dark:text-white font-bold text-xl flex items-center">
                  <span className="bg-gray-900 dark:bg-white text-white dark:text-black p-1 mr-2">M</span>
                  REACHINBOX
                </span>
              </div>
            </div>

            {/* Login form */}
            <div className="flex-1 flex items-center justify-center">
              <LoginForm />
            </div>

            {/* Footer */}
            <div className="py-4 text-center text-gray-500 text-sm">© 2023 Reachinbox. All rights reserved.</div>
          </div>
        </div>
      </div>
    </main>
  )
}
