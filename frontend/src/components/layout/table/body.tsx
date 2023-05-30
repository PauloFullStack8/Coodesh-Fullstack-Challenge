import { Line } from './line'
import { Column } from './column'
import { InputSearch } from './input-search'
import { ChangeEvent, useState } from 'react'
import { filterUsers } from '@/utils/filter-users'
import { User } from '@/@types/user-model'

export const Body = ({ users }: { users: User[] }) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const filtered = filterUsers(users, value)
    setFilteredUsers(filtered)
  }

  return (
    <div>
      <div className="flex pt-2 px-[6px] items-center justify-end">
        <InputSearch handleSearch={handleSearch} />
      </div>
      <div className="max-h-[80vh] overflow-y-auto mt-3 scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-100">
        <div className="overflow-x-auto">
          <div className="flex flex-col">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <Column title="" textSide="text-left" />
                      <Column title="ID" textSide="text-left" />

                      <Column title="Name" textSide="text-left" />
                      <Column title="Gender" textSide="text-left" />
                      <Column title="Country" textSide="text-left" />

                      <Column title="Email" textSide="text-left" />
                      <Column title="Detalhes" textSide="text-right" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredUsers?.map((user) => (
                      <Line key={user.login.uuid} data={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
