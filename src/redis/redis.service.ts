import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

import { Cache } from 'cache-manager';
@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async get(key: string) {
    const value = await this.cacheManager.get(key);
    return value || null;
  }

  async set(key: string, value: any) {
    const cache = await this.cacheManager.set(key, value, { ttl: 1000 });
    return !!cache;
  }

  async reset() {
    await this.cacheManager.reset().then(() => {
      return true;
    });
    return false;
  }

  async del(key: string) {
    const cache = await this.cacheManager.del(key);
    return !!cache;
  }
}
