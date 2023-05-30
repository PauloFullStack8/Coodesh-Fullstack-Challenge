import { User } from '@/@types/user-model'
import { formattedDate } from '@/utils/format-date'

export const UserPopup = ({ user }: { user: User }) => {
  return (
    <div>
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-lg font-bold mb-4 text-center">
          Detalhes do Usuário
        </h2>
        <div className="flex items-center justify-center mb-3">
          <img
            src={user.picture.medium}
            alt="User profile image"
            className="w-[64px] h-[64] rounded-full object-cover"
          />
        </div>
        <p className="text-left my-[3px] text-lg">
          Nome completo: {user.name.first} {user.name.last}
        </p>
        <p className="text-left my-[3px] text-lg">E-mail: {user.email}</p>
        <p className="text-left my-[3px] text-lg">Gênero: {user.gender}</p>
        <p className="text-left my-[3px] text-lg">
          Data de nascimento: {formattedDate(user.dob.date)}
        </p>
        <p className="text-left my-[3px] text-lg">Telefone: {user.phone}</p>
        <p className="text-left my-[3px] text-lg">
          Localidade: {user.location.country}
        </p>
        <p className="text-left my-[3px] text-lg">
          Endereço: {user.location.street.name}, {user.location.street.number},{' '}
          {user.location.city}
        </p>
        <p className="text-left my-[3px] text-lg">ID: {user.login.uuid}</p>
      </div>
    </div>
  )
}
