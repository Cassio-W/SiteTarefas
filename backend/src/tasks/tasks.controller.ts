import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('tasks')
export class TasksController {

  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(@Request() req, @Query('search') search?: string) {
    const userId = req.user.sub;
    return this.taskService.findByUserId(userId, search);
  }

  @Get(':id')
  findByTaskId(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findByTaskId(id)
  }

  @Post()
  create(@Request() req, @Body(ValidationPipe) createTaskDto: CreateTaskDto) {
    const userId = req.user.sub;
    return this.taskService.create(userId, createTaskDto);
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
