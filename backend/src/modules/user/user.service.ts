import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserRepository } from 'src/infra/repositories/prisma/user-repository'
import { randomUUID } from 'crypto'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const {
      cell,
      dob,
      email,
      gender,
      id,
      location,
      login,
      name,
      nat,
      phone,
      picture,
      registered,
    } = createUserDto
    return await this.userRepository.save({
      cell,
      dob,
      email,
      gender,
      id,
      location,
      login,
      name,
      nat,
      phone,
      picture,
      registered,
    })
  }

  async findAll(page: number, results: number) {
    const queryPagination = {
      skip: (page - 1) * results,
      take: results,
    }
    const users = await this.userRepository.findAll(
      queryPagination.skip,
      queryPagination.take,
    )

    return {
      results: users,
      info: {
        seed: randomUUID(),
        results,
        page,
        version: '3.0v',
      },
    }
  }

  async findOne(id: number) {
    this.checkExistUser(id)
    return await this.userRepository.findOne(id)
  }

  async update(idUser: number, updateUserDto: UpdateUserDto) {
    this.checkExistUser(idUser)

    const {
      cell,
      dob,
      email,
      gender,
      id,
      location,
      login,
      name,
      nat,
      phone,
      picture,
      registered,
    } = updateUserDto

    return await this.userRepository.update(idUser, {
      cell,
      dob,
      email,
      gender,
      id,
      location,
      login,
      name,
      nat,
      phone,
      picture,
      registered,
    })
  }

  async remove(id: number) {
    return await this.userRepository.delete(id)
  }

  async checkExistUser(id: number): Promise<void> {
    const user = await this.userRepository.findOne(id)
    if (!user) {
      throw new NotFoundException('User not found')
    }
  }
}
