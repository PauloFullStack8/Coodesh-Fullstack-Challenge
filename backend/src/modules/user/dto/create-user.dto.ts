import {
  IsString,
  IsNumber,
  IsEmail,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

class Name {
  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  first: string

  @ApiProperty()
  @IsString()
  last: string
}

class Street {
  @ApiProperty()
  @IsNumber()
  number: number

  @ApiProperty()
  @IsString()
  name: string
}

class Coordinates {
  @ApiProperty()
  @IsString()
  latitude: string

  @ApiProperty()
  @IsString()
  longitude: string
}

class Timezone {
  @ApiProperty()
  @IsString()
  offset: string

  @ApiProperty()
  @IsString()
  description: string
}

class Location {
  @ApiProperty()
  @ValidateNested()
  street: Street

  @ApiProperty()
  @IsString()
  city: string

  @ApiProperty()
  @IsString()
  state: string

  @ApiProperty()
  @IsString()
  country: string

  @ApiProperty()
  @IsNumber()
  postcode: number

  @ApiProperty()
  @ValidateNested()
  coordinates: Coordinates

  @ApiProperty()
  @ValidateNested()
  timezone: Timezone
}

class Login {
  @ApiProperty()
  @IsString()
  uuid: string

  @ApiProperty()
  @IsString()
  username: string

  @ApiProperty()
  @IsString()
  password: string

  @ApiProperty()
  @IsString()
  salt: string

  @ApiProperty()
  @IsString()
  md5: string

  @ApiProperty()
  @IsString()
  sha1: string

  @ApiProperty()
  @IsString()
  sha256: string
}

class Dob {
  @ApiProperty()
  @IsString()
  date: string

  @ApiProperty()
  @IsNumber()
  age: number
}

class Registered {
  @ApiProperty()
  @IsString()
  date: string

  @ApiProperty()
  @IsNumber()
  age: number
}

class Id {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  value: string
}

class Picture {
  @ApiProperty()
  @IsString()
  large: string

  @ApiProperty()
  @IsString()
  medium: string

  @ApiProperty()
  @IsString()
  thumbnail: string
}

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  gender: string

  @ApiProperty()
  @IsNotEmpty()
  name: Name

  @ApiProperty()
  @IsNotEmpty()
  location: Location

  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  login: Login

  @ApiProperty()
  @IsNotEmpty()
  dob: Dob

  @ApiProperty()
  @IsNotEmpty()
  registered: Registered

  @ApiProperty()
  @IsString()
  phone: string

  @ApiProperty()
  @IsString()
  cell: string

  @ApiProperty()
  @IsNotEmpty()
  id: Id

  @ApiProperty()
  @IsNotEmpty()
  picture: Picture

  @ApiProperty()
  @IsString()
  nat: string
}
