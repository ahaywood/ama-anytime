-- AlterTable
ALTER TABLE "Invite" ADD COLUMN     "confirmedUserId" INTEGER;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_confirmedUserId_fkey" FOREIGN KEY ("confirmedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
