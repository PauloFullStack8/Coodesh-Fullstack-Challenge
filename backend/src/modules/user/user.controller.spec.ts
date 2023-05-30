// import { Test, TestingModule } from '@nestjs/testing'
// import { UserController } from './user.controller'
// import { UserService } from './user.service'

// describe('UserController', () => {
//   let controller: UserController

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [UserController],
//       providers: [UserService],
//     }).compile()

//     controller = module.get<UserController>(UserController)
//   })

//   it('should be defined', () => {
//     expect(controller).toBeDefined()
//   })
// })

import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

describe('UserController', () => {
  let controller: UserController
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile()

    controller = module.get<UserController>(UserController)
    service = module.get<UserService>(UserService)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Ana',
          last: 'Mele',
        },
        location: {
          street: {
            number: 8929,
            name: 'Valwood Pkwy',
          },
          city: 'Billings',
          state: 'Michigan',
          country: 'United States',
          postcode: 63104,
          coordinates: {
            latitude: '-69.8246',
            longitude: '134.8719',
          },
          timezone: {
            offset: '+9:30',
            description: 'Adelaide, Darwin',
          },
        },
        email: 'jennie.nichols@example.com',
        login: {
          uuid: '7a0eed16-9430-4d68-901f-c0d4c1c3bf00',
          username: 'yellowpeacock117',
          password: 'addison',
          salt: 'sld1yGtd',
          md5: 'ab54ac4c0be9480ae8fa5e9e2a5196a3',
          sha1: 'edcf2ce613cbdea349133c52dc2f3b83168dc51b',
          sha256:
            '48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d',
        },
        dob: {
          date: '1992-03-08T15:13:16.688Z',
          age: 30,
        },
        registered: {
          date: '2007-07-09T05:51:59.390Z',
          age: 14,
        },
        phone: '(272) 790-0888',
        cell: '(489) 330-2385',
        id: {
          name: 'SSN',
          value: '405-88-3636',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
        },
        nat: 'US',
      }

      const result = await controller.create(createUserDto)

      expect(result).toStrictEqual(createUserDto)
    })
  })
})
//   describe('findAll', () => {
//     it('should find all users', async () => {
//       const page = 1
//       const results = 10

//       const foundUsers = [] // Defina um array com os usuários encontrados pelo serviço

//       jest.spyOn(service, 'findAll').mockResolvedValue(foundUsers)

//       const result = await controller.findAll(page, results)

//       expect(service.findAll).toHaveBeenCalledWith(page, results)
//       expect(result).toBe(foundUsers)
//     })
//   })

//   describe('findOne', () => {
//     it('should find a user by id', async () => {
//       const id = '1'

//       const foundUser = {} // Defina o objeto de usuário encontrado pelo serviço

//       jest.spyOn(service, 'findOne').mockResolvedValue(foundUser)

//       const result = await controller.findOne(id)

//       expect(service.findOne).toHaveBeenCalledWith(+id)
//       expect(result).toBe(foundUser)
//     })
//   })

//   describe('update', () => {
//     it('should update a user', async () => {
//       const id = '1'
//       const updateUserDto: UpdateUserDto = {
//         // Preencha aqui os dados a serem atualizados
//       }

//       const updatedUser = {} // Defina o objeto de usuário atualizado pelo serviço

//       jest.spyOn(service, 'update').mockResolvedValue(updatedUser)

//       const result = await controller.update(id, updateUserDto)

//       expect(service.update).toHaveBeenCalledWith(+id, updateUserDto)
//       expect(result).toBe(updatedUser)
//     })
//   })

//   describe('remove', () => {
//     it('should remove a user', async () => {
//       const id = '1'

//       const removedUser = {} // Defina o objeto de usuário removido pelo serviço

//       jest.spyOn(service, 'remove').mockResolvedValue(removedUser)

//       const result = await controller.remove(id)

//       expect(service.remove).toHaveBeenCalledWith(+id)
//       expect(result).toBe(removedUser)
//     })
//   })
// })
