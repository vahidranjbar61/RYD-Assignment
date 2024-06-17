import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from '../../application-layer/product/product.service';
import { CreateProductDto } from 'src/poi/application-layer/dtos/product.dto';

@Controller('product')
export class ProductController {
    public constructor(
        private readonly productService: ProductService,
    ) {}

    @Post()
    public createProduct(@Body() createProductDto: CreateProductDto): Promise<void> {
        return this.productService.createProduct(createProductDto);
    }
}
