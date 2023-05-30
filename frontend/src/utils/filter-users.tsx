import { User } from '@/@types/user-model'

export const filterUsers = (users: User[], searchTerm: string) => {
  return users.filter((user) => {
    return (
      user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
}
