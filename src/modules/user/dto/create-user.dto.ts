import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'frist name',
    example: 'Weerayut',
  })
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
