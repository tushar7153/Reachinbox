"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import OneboxLayout from "@/components/onebox-layout"
import ThreadList from "@/components/thread-list"
import ThreadDetail from "@/components/thread-detail"
import LeadDetails from "@/components/lead-details"
import EmptyState from "@/components/empty-state"
import DeleteConfirmation from "@/components/delete-confirmation"
import type { Thread } from "@/types/thread"

export default function OneboxPage() {
  const [threads, setThreads] = useState<Thread[]>([])
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null)
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null)
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [threadToDelete, setThreadToDelete] = useState<string | null>(null)
  const [showEmptyState, setShowEmptyState] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [router])

  // Fetch thread list
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        // In a real app, we would fetch from the actual API
        // const response = await fetch("/api/onebox/list");
        // const data = await response.json();

        // Mock data for demonstration
        const mockThreads: Thread[] = [
          {
            id: "1",
            subject: "New Product Launch",
            snippet: "Hi there, I wanted to discuss a potential partnership opportunity with your company...",
            from: { name: "Jeanne", email: "jeanne@icloud.com" },
            to: [{ name: "Lennon", email: "lennon.j@mail.com" }],
            cc: [{ name: "Lennon", email: "lennon.j@mail.com" }],
            date: "2023-06-20T09:16:00Z",
            isRead: true,
            labels: ["important"],
            status: "Interested",
            campaign: "Campaign Name",
            body: "Hi (FIRST_NAME),\n\nI would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
          },
          {
            id: "2",
            subject: "Product Demo Request",
            snippet: "I've tried a lot and...",
            from: { name: "Beata", email: "beata@gmail.com" },
            to: [{ name: "Me", email: "me@reachinbox.com" }],
            date: "2023-03-07T10:15:00Z",
            isRead: false,
            labels: [],
            status: "Interested",
            campaign: "Campaign Name",
            body: "I've tried a lot and...",
          },
          {
            id: "3",
            subject: "Follow-up from Conference",
            snippet: "I've tried a lot and...",
            from: { name: "Sanya", email: "sanya@gmail.com" },
            to: [{ name: "Me", email: "me@reachinbox.com" }],
            date: "2023-03-07T16:45:00Z",
            isRead: true,
            labels: [],
            status: "Closed",
            campaign: "Campaign Name",
            body: "I've tried a lot and...",
          },
          {
            id: "4",
            subject: "Payment Issue",
            snippet: "Payment not going through",
            from: { name: "William", email: "william@gmail.com" },
            to: [{ name: "Me", email: "me@reachinbox.com" }],
            date: "2023-03-07T14:30:00Z",
            isRead: true,
            labels: [],
            status: "Interested",
            campaign: "Campaign Name",
            body: "Payment not going through",
          },
          {
            id: "5",
            subject: "More Information",
            snippet: "Could you tell me more about it",
            from: { name: "Johnson", email: "johnson@gmail.com" },
            to: [{ name: "Me", email: "me@reachinbox.com" }],
            date: "2023-03-07T11:20:00Z",
            isRead: true,
            labels: [],
            status: "Meeting Booked",
            campaign: "Campaign Name",
            body: "Could you tell me more about it",
          },
          {
            id: "6",
            subject: "Interest in Product",
            snippet: "Hi, I am interested",
            from: { name: "Orlando", email: "orlando@gmail.com" },
            to: [{ name: "Me", email: "me@reachinbox.com" }],
            date: "2023-05-10T18:30:00Z",
            isRead: true,
            labels: [],
            status: "Meeting Completed",
            campaign: "Campaign Name",
            body: "Hi, I am interested",
          },
        ]

        if (mockThreads.length === 0) {
          setShowEmptyState(true)
        } else {
          setShowEmptyState(false)
          setThreads(mockThreads)

          // Select the first thread by default if available
          if (mockThreads.length > 0 && !selectedThreadId) {
            setSelectedThreadId(mockThreads[0].id)
          }
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch threads",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchThreads()
  }, [toast, selectedThreadId])

  // Fetch selected thread details
  useEffect(() => {
    const fetchThreadDetail = async () => {
      if (!selectedThreadId) return

      try {
        // In a real app, we would fetch from the actual API
        // const response = await fetch(`/api/onebox/${selectedThreadId}`);
        // const data = await response.json();

        // For now, find the thread in our mock data
        const thread = threads.find((t) => t.id === selectedThreadId) || null
        setSelectedThread(thread)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch thread details",
          variant: "destructive",
        })
      }
    }

    fetchThreadDetail()
  }, [selectedThreadId, threads, toast])

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedThreadId) return

      // 'D' key for delete
      if (e.key === "d" || e.key === "D") {
        setThreadToDelete(selectedThreadId)
        setShowDeleteConfirmation(true)
      }

      // 'R' key for reply
      if (e.key === "r" || e.key === "R") {
        setIsReplyOpen(true)
      }
    },
    [selectedThreadId],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const handleSelectThread = (threadId: string) => {
    setSelectedThreadId(threadId)
    // Mark as read in a real app
  }

  const handleDeleteThread = async (threadId: string) => {
    try {
      // In a real app, we would call the API
      // await fetch(`/api/onebox/${threadId}`, { method: 'DELETE' });

      // Update local state
      setThreads(threads.filter((thread) => thread.id !== threadId))
      toast({
        title: "Thread deleted",
        description: "The thread has been successfully deleted",
      })

      // If the deleted thread was selected, select the first available thread
      if (selectedThreadId === threadId) {
        const remainingThreads = threads.filter((thread) => thread.id !== threadId)
        setSelectedThreadId(remainingThreads.length > 0 ? remainingThreads[0].id : null)
        setSelectedThread(null)
      }

      // Check if we need to show empty state
      if (threads.length <= 1) {
        setShowEmptyState(true)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete thread",
        variant: "destructive",
      })
    }
  }

  const handleConfirmDelete = () => {
    if (threadToDelete) {
      handleDeleteThread(threadToDelete)
      setShowDeleteConfirmation(false)
      setThreadToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false)
    setThreadToDelete(null)
  }

  const handleSendReply = async (replyData: {
    to: string
    from: string
    subject: string
    body: string
  }) => {
    if (!selectedThreadId) return

    try {
      // In a real app, we would call the API
      // await fetch(`/api/reply/${selectedThreadId}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(replyData)
      // });

      toast({
        title: "Reply sent",
        description: "Your reply has been sent successfully",
      })

      setIsReplyOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reply",
        variant: "destructive",
      })
    }
  }

  return (
    <OneboxLayout>
      {showEmptyState ? (
        <EmptyState />
      ) : (
        <div className="flex h-[calc(100vh-64px)]">
          <ThreadList
            threads={threads}
            selectedThreadId={selectedThreadId}
            onSelectThread={handleSelectThread}
            isLoading={isLoading}
          />
          <ThreadDetail
            thread={selectedThread}
            isReplyOpen={isReplyOpen}
            onOpenReply={() => setIsReplyOpen(true)}
            onCloseReply={() => setIsReplyOpen(false)}
            onDeleteThread={(id) => {
              setThreadToDelete(id)
              setShowDeleteConfirmation(true)
            }}
            onSendReply={handleSendReply}
          />
          <LeadDetails thread={selectedThread} />
        </div>
      )}

      {showDeleteConfirmation && <DeleteConfirmation onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />}
    </OneboxLayout>
  )
}
