class Name {
  title: string

  first: string

  last: string
}

class Street {
  number: number

  name: string
}

class Coordinates {
  latitude: string

  longitude: string
}

class Timezone {
  offset: string

  description: string
}

class Location {
  street: Street

  city: string

  state: string

  country: string

  postcode: number

  coordinates: Coordinates

  timezone: Timezone
}

class Login {
  uuid: string

  username: string

  password: string

  salt: string

  md5: string

  sha1: string

  sha256: string
}

class Dob {
  date: string

  age: number
}

class Registered {
  date: string

  age: number
}

class Id {
  name: string

  value: string
}

class Picture {
  large: string

  medium: string

  thumbnail: string
}

export class User {
  gender: string

  name: Name

  location: Location

  email: string

  login: Login

  dob: Dob

  registered: Registered

  phone: string

  cell: string

  id: Id

  picture: Picture

  nat: string
}
