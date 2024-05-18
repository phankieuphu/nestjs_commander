import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
  async runTask() {
    // Task logic here
    console.log('Running task...');
  }
}
