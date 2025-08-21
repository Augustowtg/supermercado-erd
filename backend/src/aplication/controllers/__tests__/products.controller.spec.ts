import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "../products.controller";
import { randomUUID } from "crypto";
import { ProductService } from "@domain/services/products.service";
import { CreateProductDto } from "@application/models/create-product.dto";
import { DatabaseModule } from "@infrastructure/database/database.module";

describe("ProductsController", () => {

    let controller: ProductsController;
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [ProductService],
            imports: [DatabaseModule]
        }).compile();

        controller = app.get<ProductsController>(ProductsController);
    })
    describe("Create", () => {
        it("should be create", async () => {
            const dto: CreateProductDto = {
                name: "Sal",
                cost: 1.24,
                barcode: randomUUID(),
                description: "Sal",
                price: 1.32,
                sku: randomUUID()
            }
            const result = await controller.create(dto);
            console.log(result.product)
            expect(controller.create(dto)).toBe({ product: {} })
        })
    })
})