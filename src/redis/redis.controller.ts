import { Controller } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';
import { RedisService } from './redis.service';

@Controller()
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  async set(key: string, value: any): Promise<any> {
    return await this.redisService.set(key, value);
  }

  async get(key: string): Promise<any> {
    return await this.redisService.get(key);
  }

  async del(key: string): Promise<any> {
    return await this.redisService.del(key);
  }

  async reset(): Promise<any> {
    return await this.redisService.reset();
  }
}
