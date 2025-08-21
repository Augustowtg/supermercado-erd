import { product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class Products implements product {
    id: number;
    name: string;
    description: string;
    price: Decimal;
    sku: string;
    barcode: string;
    active: boolean;
    cost: Decimal;
    createdAt: Date;
    updatedAt: Date;
    brandId: number;
    categoryId: number;

    constructor(id: number, name: string, description: string, price: Decimal, created_at: Date, updated_at: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.createdAt = created_at;
        this.updatedAt = updated_at;
    }

    static fromPrisma(prismaProduct: product): Products {
        return new Products(
            prismaProduct.id,
            prismaProduct.name,
            prismaProduct.description,
            prismaProduct.price,
            prismaProduct.createdAt,
            prismaProduct.updatedAt
        );
    }

    toPrisma(): product {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            sku: this.sku,
            barcode: this.barcode,
            active: this.active,
            cost: this.cost,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            brandId: this.brandId,
            categoryId: this.categoryId
        };
    }
}