import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  
  async create(createUserDto: CreateUserDto) {

    const existingEmail = await this.databaseService.user.findUnique({
      where: {
        email: createUserDto.email,
      }
    })
    
    if (existingEmail) {
      throw new Error('Email already registered')
    }

    const hashedPassword = await this.generateHash(createUserDto.password);

    return this.databaseService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      }
      
    })
  }

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      }
    });
  }

  private async generateHash(password: string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds)
  }
}
