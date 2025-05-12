"use client"

import { Button } from "@/components/ui/button"

interface DeleteConfirmationProps {
  onConfirm: () => void
  onCancel: () => void
}

export default function DeleteConfirmation({ onConfirm, onCancel }: DeleteConfirmationProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Are you sure?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Your selected email will be deleted.</p>
        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            className="bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
