import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateProductDto } from "src/aplication/models/create-product.dto";
import { PrismaService } from "src/infrastructure/database/prisma.service";
import { Products } from "../entities/products.entity";

@Injectable()
export class ProductService {
    constructor(
        private readonly repository: PrismaService
    ) { }

    public async create(dto: CreateProductDto): Promise<Products> {
        const productSave = await this.repository.product.create({
            data: {
                name: dto.name,
                description: dto.description ?? "",
                price: dto.price,
                sku: dto.sku,
                barcode: dto.barcode,
                active: true,
                cost: dto.cost,
                createdAt: new Date(),
                updatedAt: new Date(),
                brandId: 0,
                categoryId: 0
            }
        });

        return Products.fromPrisma(productSave);
    }
}