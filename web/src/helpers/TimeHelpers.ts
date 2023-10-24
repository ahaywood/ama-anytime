import { formatRelative } from 'date-fns'

export const relativeDateTime = (myDate) => {
  const date = new Date(myDate)
  const today = new Date()
  return formatRelative(date, today)
}
