import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoAsyncConfig } from 'src/config/mongo.config';

@Module({
  imports: [MongooseModule.forRootAsync(mongoAsyncConfig)],
})
export class MongoModule {}
