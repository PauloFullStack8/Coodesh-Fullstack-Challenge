export const formattedDate = (dateInput: string) => {
  const date = new Date(dateInput)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}
