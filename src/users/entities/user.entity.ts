import { Role, User as UserModel } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsPositive } from 'class-validator';

export class User implements UserModel {
  @ApiProperty({ required: true, description: '아이디' })
  @IsPositive()
  id: number;

  @ApiProperty({ description: '권한' })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ description: '생성된 날짜' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: '업데이트된 날짜' })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({ description: '삭제된 날짜' })
  @IsDate()
  deletedAt: Date | null;
}