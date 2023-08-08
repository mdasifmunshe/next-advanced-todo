/*
  Warnings:

  - You are about to drop the column `description` on the `Todo` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Todo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(32)`.
  - Added the required column `authorId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "description",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "content" TEXT,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(32);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
