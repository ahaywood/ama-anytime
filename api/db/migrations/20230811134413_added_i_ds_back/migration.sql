-- AlterTable
ALTER TABLE "Bookmark" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Like_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Vote_pkey" PRIMARY KEY ("id");
