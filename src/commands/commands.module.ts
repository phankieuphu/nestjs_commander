import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { MyService } from './command.service';
import { MyCommands } from './test.command';

@Module({
  imports: [CommandModule],
  providers: [MyService, MyCommands],
  exports: [],
})
export class CliModule {}
