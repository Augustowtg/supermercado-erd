import { Body, Controller, Post } from "@nestjs/common";
import { Products } from "src/domain/entities/products.entity";
import { CreateProductDto } from "../models/create-product.dto";
import { ProductService } from "@domain/services/products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductService) { }

    @Post()
    public async create(@Body() dto: CreateProductDto): Promise<{ product: Products }> {
        const result = await this.service.create(dto);
        return { product: result }
    }
}