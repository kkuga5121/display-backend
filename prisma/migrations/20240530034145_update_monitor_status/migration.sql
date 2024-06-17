/*
  Warnings:

  - Added the required column `status` to the `monitorstatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "monitorstatus" ADD COLUMN     "status" TEXT NOT NULL;
