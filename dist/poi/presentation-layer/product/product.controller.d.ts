import { ProductService } from '../../application-layer/product/product.service';
import { CreateProductDto } from 'src/poi/application-layer/dtos/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: CreateProductDto): Promise<void>;
}
