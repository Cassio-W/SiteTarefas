import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateTaskDto } from './dto/create-task.dto'
import { Prisma } from 'generated/prisma';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  constructor(private readonly databaseService: DatabaseService) {}

  async findByUserId(userId: number, search?: string) {

      return this.databaseService.task.findMany({
        where: {
          ownerId: userId,
          ...(search && {
            OR: [
              { title: { contains: search, mode: 'insensitive' } },
              { description: { contains: search, mode: 'insensitive' } },
            ],
          }),
        }
      })
    }

  async create(userId, createTaskDto: CreateTaskDto) {
    return this.databaseService.task.create({
      data: {
        ...createTaskDto,
        owner: {
          connect: { id: userId, }
        }
      }
    })
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.databaseService.task.update({
      where: {
        id,
      },
      data: updateTaskDto,
    })
  }

  async delete(id: number) {
    return this.databaseService.task.delete({
      where: {
        id,
      }
    })
  }
}
