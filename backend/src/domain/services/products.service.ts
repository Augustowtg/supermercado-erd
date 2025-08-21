import { Injectable } from "@nestjs/common";
import { Products } from "../entities/products.entity";
import { PrismaService } from "@infrastructure/database/prisma.service";
import { CreateProductDto } from "@application/models/create-product.dto";

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
                updatedAt: new Date()
            }
        }); 

        return Products.fromPrisma(productSave);
    }
}