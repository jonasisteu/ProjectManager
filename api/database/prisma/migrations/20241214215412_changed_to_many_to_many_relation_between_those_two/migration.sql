/*
  Warnings:

  - You are about to drop the column `project_id` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_project_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "project_id";

-- CreateTable
CREATE TABLE "_CategoryToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CategoryToProject_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CategoryToProject_B_index" ON "_CategoryToProject"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
