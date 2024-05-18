import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { MyService } from './command.service';

@Injectable()
export class MyCommands {
  constructor(private readonly myService: MyService) {}

  @Command({
    command: 'run:task',
    describe: 'Run a specific task',
    // autoExit: true,
  })
  async run() {
    await this.myService.runTask();
    console.log('Task Completed');
  }
}


@Injectable()
export class MyCommand {
  constructor(private readonly myService: MyService) {}

  @Command({
    command: 'run:task',
    describe: 'Run a specific task',
    // autoExit: true,
  })
  async run() {
    await this.myService.runTask();
    console.log('Task Completed');
  }
}
