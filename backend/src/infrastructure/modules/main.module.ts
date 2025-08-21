import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { ProductsModule } from "./products.module";

@Module({
    imports: [
        DatabaseModule,
        ProductsModule
    ],
    providers: []
})
export class MainModule { }