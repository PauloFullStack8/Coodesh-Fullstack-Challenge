import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  Raiz() {
    return 'REST Fullstack Challenge 20201209 Running'
  }
}
