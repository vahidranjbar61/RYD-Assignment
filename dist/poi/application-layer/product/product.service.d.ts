import { Product } from 'src/poi/persistance-layer/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dtos/product.dto';
export declare class ProductService {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    createProduct(productDto: CreateProductDto): Promise<void>;
}
