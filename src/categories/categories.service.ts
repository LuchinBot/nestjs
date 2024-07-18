import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { json } from 'stream/consumers';

@Injectable()
export class CategoriesService {
  create(createCategoryDto: CreateCategoryDto) {
    // Retornar un array de categorias
    return ['category1', 'category2'];
  }

  findAll() {
    const categories = ['category1', 'category2'];
    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
