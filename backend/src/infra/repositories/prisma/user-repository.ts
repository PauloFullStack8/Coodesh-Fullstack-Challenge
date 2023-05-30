import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'
import { UpdateUserDto } from 'src/modules/user/dto/update-user.dto'
import { User as UserEntity } from 'src/modules/user/entities/user.entity'

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id_ref: id,
      },
      include: {
        name: true,
        location: {
          include: {
            street: true,
            coordinates: true,
            timezone: true,
          },
        },
        login: true,
        dob: true,
        registered: true,
        id: true,
        picture: true,
      },
    })
  }

  async findAll(skip: number, take: number): Promise<User[]> {
    return this.prisma.user.findMany({
      take,
      skip,
      include: {
        name: true,
        location: {
          include: {
            street: true,
            coordinates: true,
            timezone: true,
          },
        },
        login: true,
        dob: true,
        registered: true,
        id: true,
        picture: true,
      },
    })
  }

  async save(data: UserEntity): Promise<User> {
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
    } = data

    const streetData = {
      number: location.street.number,
      name: location.street.name,
    }

    const coordinatesData = {
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    }

    const timezoneData = {
      offset: location.timezone.offset,
      description: location.timezone.description,
    }

    const locationData = {
      city: location.city,
      state: location.state,
      country: location.country,
      postcode: location.postcode,
      street: { create: streetData },
      coordinates: { create: coordinatesData },
      timezone: { create: timezoneData },
    }

    const nameData = {
      title: name.title,
      first: name.first,
      last: name.last,
    }

    return this.prisma.user.create({
      data: {
        cell,
        email,
        gender,
        nat,
        phone,
        location: { create: locationData },
        dob: { create: dob },
        login: { create: login },
        registered: { create: registered },
        id: { create: id },
        picture: { create: picture },
        name: { create: nameData },
      },
      include: {
        name: true,
        location: {
          include: {
            street: true,
            coordinates: true,
            timezone: true,
          },
        },
        login: true,
        dob: true,
        registered: true,
        id: true,
        picture: true,
      },
    })
  }

  async update(idUser: number, data: UpdateUserDto): Promise<User> {
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
    } = data

    const streetData = {
      number: location.street.number,
      name: location.street.name,
    }

    const coordinatesData = {
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    }

    const timezoneData = {
      offset: location.timezone.offset,
      description: location.timezone.description,
    }

    const locationData = {
      city: location.city,
      state: location.state,
      country: location.country,
      postcode: location.postcode,
      street: { create: streetData },
      coordinates: { create: coordinatesData },
      timezone: { create: timezoneData },
    }

    const nameData = {
      title: name.title,
      first: name.first,
      last: name.last,
    }

    return this.prisma.user.update({
      where: {
        idId: idUser,
      },
      data: {
        cell,
        email,
        gender,
        nat,
        phone,
        location: { create: locationData },
        dob: { create: dob },
        login: { create: login },
        registered: { create: registered },
        id: { create: id },
        picture: { create: picture },
        name: { create: nameData },
      },
      include: {
        name: true,
        location: {
          include: {
            street: true,
            coordinates: true,
            timezone: true,
          },
        },
        login: true,
        dob: true,
        registered: true,
        id: true,
        picture: true,
      },
    })
  }

  async delete(idUser: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id_ref: idUser,
      },
      include: {
        name: true,
        location: {
          include: {
            street: true,
            coordinates: true,
            timezone: true,
          },
        },
        login: true,
        dob: true,
        registered: true,
        id: true,
        picture: true,
      },
    })
  }
}
