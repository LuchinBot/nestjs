import { IsString } from 'class-validator';
export class CreateCategoryDto {
  @IsString()
  title: string;
  @IsString()
  slug: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
}
