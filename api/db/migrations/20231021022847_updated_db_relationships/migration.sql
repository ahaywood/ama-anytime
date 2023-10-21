/*
  Warnings:

  - You are about to drop the `Following` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Following" DROP CONSTRAINT "Following_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Following" DROP CONSTRAINT "Following_followingId_fkey";

-- DropTable
DROP TABLE "Following";

-- CreateTable
CREATE TABLE "HashtagSearch" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "HashtagSearch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonSearch" (
    "id" SERIAL NOT NULL,
    "lookingForUserId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PersonSearch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" SERIAL NOT NULL,
    "followerId" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HashtagSearch_hashtag_key" ON "HashtagSearch"("hashtag");

-- CreateIndex
CREATE UNIQUE INDEX "Follow_followerId_followingId_key" ON "Follow"("followerId", "followingId");

-- AddForeignKey
ALTER TABLE "HashtagSearch" ADD CONSTRAINT "HashtagSearch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonSearch" ADD CONSTRAINT "PersonSearch_lookingForUserId_fkey" FOREIGN KEY ("lookingForUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonSearch" ADD CONSTRAINT "PersonSearch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
