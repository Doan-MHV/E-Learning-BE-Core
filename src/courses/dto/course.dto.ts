import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CourseDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  id: string;
}