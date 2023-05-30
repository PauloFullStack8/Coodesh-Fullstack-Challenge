import { Body } from './body'
import { Pagination } from './pagination'
import { useState } from 'react'
import ReactLoading from 'react-loading'

import { useQuery } from '@tanstack/react-query'
import { getUserList } from '@/services/get-user-list'

export const UserTable = () => {
  const [pageCurrent, setPageCurrent] = useState(1)

  const { data, isLoading } = useQuery(['userList', pageCurrent], () =>
    getUserList(pageCurrent),
  )

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <ReactLoading
          type="cylon"
          color="#efefefe"
          height={'60%'}
          width={300}
        />
      </div>
    )
  }

  return (
    <div className="pb-4">
      <Pagination
        pageCurrent={pageCurrent}
        onBackPage={() =>
          setPageCurrent((oldValue) => Math.max(oldValue - 1, 1))
        }
        onNextPage={() => setPageCurrent((oldValue) => oldValue + 1)}
      />

      <Body users={data?.results!} />
    </div>
  )
}
