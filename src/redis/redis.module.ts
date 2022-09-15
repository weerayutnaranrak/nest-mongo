import { CacheModule, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';
import { redisAsyncConfig } from 'src/config/redis.config';
@Module({
  imports: [CacheModule.registerAsync(redisAsyncConfig)],
  controllers: [RedisController],
  providers: [RedisService],
  exports: [CacheModule],
})
export class RedisModule {}
