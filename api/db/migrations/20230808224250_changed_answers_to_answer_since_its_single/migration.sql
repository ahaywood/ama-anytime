/*
  Warnings:

  - You are about to drop the column `answers` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "answers",
ADD COLUMN     "answer" TEXT;
