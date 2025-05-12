import Image from "next/image"

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)] bg-white dark:bg-black text-gray-900 dark:text-white p-8">
      <div className="w-40 h-40 relative mb-6">
        <Image src="/images/empty-state.png" alt="Empty inbox" fill className="object-contain" />
      </div>
      <h2 className="text-2xl font-bold mb-2">It's the beginning of a legendary sales pipeline</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
        When you have inbound E-mails you'll see them here
      </p>
    </div>
  )
}
