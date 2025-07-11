import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('tasks')
export class TasksController {

  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(@Query('search') search?: string) {
    return this.taskService.findAll(search);
  }

  @Post(':id')
  create(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) createTaskDto: CreateTaskDto) {
    return this.taskService.create(id, createTaskDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.delete(id);
  }

}
