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

  async findAll(search?: string) {
    if (search) {
      return this.databaseService.task.findMany({
        where : {
          title: {
            contains: search,
          },
          OR: [{
            description: {
              contains: search,
            },
          }],
        },
      });
    }

    return this.databaseService.task.findMany();
  }

  async create(id = 1, createTaskDto: CreateTaskDto) {
    return this.databaseService.task.create({
      data: {
        ...createTaskDto,
        owner: {
          connect: { id, }
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
