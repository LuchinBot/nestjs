import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { json } from 'stream/consumers';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    // Lógica para crear la categoria
    const category = this.categoriesRepository.create(createCategoryDto);
    return this.categoriesRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    // Obtener todos los registros
    return this.categoriesRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    // Obtener un solo registro
    return this.categoriesRepository.findOne({
      where: { id }
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return this.categoriesRepository.delete(id);
  }
}
