import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.model';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Post()
  async create(@Body() job: Job): Promise<Job> {
    return this.jobService.create(job);
  }
}
