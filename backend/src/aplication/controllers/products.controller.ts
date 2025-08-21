import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { CreateProductDto } from "../models/create-product.dto";
import { ProductService } from "src/domain/services/products.service";
import { Products } from "src/domain/entities/products.entity";

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductService) {}

    @Post()
    public async find(@Body() dto: CreateProductDto): Promise<{product: Products}> {
        const result = await this.service.create(dto);
        return { product: result }
    }
}