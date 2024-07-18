import { Category } from '../../categories/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  slug: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  stock: number;
  @Column()
  image: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  // Llaves foraneas
  @ManyToOne(() => Category, (category) => category.id)
  category: Category;
}
