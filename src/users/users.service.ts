import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseSerice: DatabaseService) {}

  create(createUserDto: CreateUserDto) {
    return this.databaseSerice.user.create({
      data: createUserDto
    })
  }

  findAll() {
    return this.databaseSerice.user.findMany();
  }

  findOne(id: number) {
    return this.databaseSerice.user.findUnique({
      where: {
        id,
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseSerice.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.databaseSerice.user.delete({
      where: {
        id,
      }
    });
  }
}
