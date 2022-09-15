import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RedisService } from 'src/redis/redis.service';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private redisService: RedisService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    await this.redisService.del('user');
    const user = await this.userModel.create(createUserDto);
    return user;
  }

  async findAll() {
    await this.redisService.reset();
    let user = await this.redisService.get('user');
    if (!user) {
      user = await this.userModel.find();
      await this.redisService.set('user', user);
    }

    return user;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    return user[0];
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto);
    await this.redisService.del('user');
    return user;
  }
  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);
    await this.redisService.del('user');
    return user;
  }
}
