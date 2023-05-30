import { User } from '@/@types/user-model'
import { UserPopup } from '../pop-up/details-user-pop-up'
import { useState } from 'react'

export const Line = ({ data }: { data: User }) => {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && (
        <div className={`absolute h-screen  ${isOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 flex items-center justify-center z-50 flex-col bg-[#000000c9]">
            <UserPopup user={data} />
            <button
              onClick={togglePopup}
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 hover:cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      <tr key={data.login.uuid} className="border">
        <td className="pl-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap capitalize ">
          <img
            src={data.picture.medium}
            alt="Thumbnail"
            className="rounded-full w-[36px] h-[36px] object-cover"
          />
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap capitalize">
          {data.login.uuid}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap capitalize">
          {`${data.name.first} ${data.name.last}`}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap capitalize">
          {`${data.gender} `}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap capitalize">
          {`${data.location.country} `}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {data.email}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap flex ">
          <button
            className="text-green-500 hover:text-green-700"
            onClick={togglePopup}
          >
            Detalhes
          </button>
        </td>
      </tr>
    </>
  )
}
