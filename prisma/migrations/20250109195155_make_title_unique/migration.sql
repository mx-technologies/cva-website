/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Resource_title_key" ON "Resource"("title");
