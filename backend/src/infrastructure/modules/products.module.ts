import { Module } from "@nestjs/common";
import { ProductsController } from "src/aplication/controllers/products.controller";
import { ProductService } from "src/domain/services/products.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductsModule { }