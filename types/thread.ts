export interface Person {
  name: string
  email: string
}

export interface Thread {
  id: string
  subject: string
  snippet: string
  from: Person
  to: Person[]
  cc?: Person[]
  date: string
  isRead: boolean
  labels: string[]
  status: string
  campaign: string
  body: string
}
