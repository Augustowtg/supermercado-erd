/*
  Warnings:

  - You are about to drop the column `brand_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."product" DROP CONSTRAINT "product_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."product" DROP CONSTRAINT "product_category_id_fkey";

-- AlterTable
ALTER TABLE "public"."product" DROP COLUMN "brand_id",
DROP COLUMN "category_id",
ADD COLUMN     "brandId" INTEGER,
ADD COLUMN     "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."product" ADD CONSTRAINT "product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "public"."brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product" ADD CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
