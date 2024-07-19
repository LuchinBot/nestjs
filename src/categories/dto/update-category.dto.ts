import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString()
  title: string;
  @IsString()
  slug: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
  // se agrega la fecha al updated_at timestamp
  updated_at: Date;
}
