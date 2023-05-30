```Typescript
@Get('json')
  async json() {
    const rawData = fs.readFileSync(
      'C:/Users/UESB/www/backend/src/modules/user/users.json',
      'utf-8',
    )
    const users = JSON.parse(rawData)

    for (const user of users.results) {
      const userType = user as User
      console.log('Salvo')

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
      } = userType

      const streetData = {
        number: location.street.number,
        name: location.street.name,
      }

      const IdData = {
        name: id.name ? id.name : 'Indisponível',
        value: id.value ? id.value : 'Indisponível',
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

      await this.prismaService.user.create({
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
          id: { create: IdData },
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
```