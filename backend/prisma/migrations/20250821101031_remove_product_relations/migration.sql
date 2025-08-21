/*
  Warnings:

  - You are about to drop the column `brandId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."product" DROP CONSTRAINT "product_brandId_fkey";

-- DropForeignKey
ALTER TABLE "public"."product" DROP CONSTRAINT "product_categoryId_fkey";

-- AlterTable
ALTER TABLE "public"."product" DROP COLUMN "brandId",
DROP COLUMN "categoryId";
