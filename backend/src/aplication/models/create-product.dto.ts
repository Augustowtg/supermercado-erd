import { Prisma, product } from "@prisma/client";

export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    sku: string;
    barcode: string;
    cost: number;
}