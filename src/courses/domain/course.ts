import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/domain/user';

export class Course {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  courseName: string;

  @ApiProperty({ type: String })
  categoryType?: string;

  @ApiProperty({ type: Number })
  coursePrice?: number;

  @ApiProperty({ type: () => User })
  courseCreator?: User | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
