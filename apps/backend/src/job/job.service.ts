import { Injectable } from '@nestjs/common';
import { Job } from './job.model';

@Injectable()
export class JobService {
  private jobs: Job[] = [];

  async findAll(): Promise<Job[]> {
    return this.jobs;
  }

  async create(job: Job): Promise<Job> {
    this.jobs.push(job);
    return job;
  }
}
