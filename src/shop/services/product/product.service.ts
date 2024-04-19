import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../../enteties/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findProduct(productId: number): Promise<Product> {
    return this.productsRepository.findOne({
        where: {
            id: productId
        }
    });
  }

  save(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }
}

