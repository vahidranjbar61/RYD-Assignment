import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/poi/persistance-layer/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductService {
    public constructor(
        @InjectRepository(Product) private readonly productRepo: Repository<Product>
    ) {}

    public async createProduct(productDto: CreateProductDto): Promise<void> {
        const product = new Product();
        product.name = productDto.name;
        await this.productRepo.save(product);
    }
}
