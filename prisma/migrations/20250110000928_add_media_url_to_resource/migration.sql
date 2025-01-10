/*
  Warnings:

  - Added the required column `mediaUrl` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "mediaUrl" TEXT NOT NULL,
ALTER COLUMN "creatorId" DROP NOT NULL;
