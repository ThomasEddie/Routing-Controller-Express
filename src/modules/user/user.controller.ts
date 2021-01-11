import {Post,Get,JsonController,Controller}  from 'routing-controllers';

@JsonController('/all')
export class UserController {

  @Get('/users')
  getAll() {
    return 'This action returns all users';
  }
}