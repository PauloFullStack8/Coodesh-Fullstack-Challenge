import { Page } from '@/@types/page'
import { api } from './api'
import { User } from '@/@types/user-model'

export const getUserList = async (page: number): Promise<Page<User>> => {
  const response = await api.get<Page<User>>(`?page=${page}&results=50`)

  return response.data
}
