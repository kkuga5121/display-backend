-- AlterTable
ALTER TABLE "monitorstatus" ADD COLUMN     "sequenceId" TEXT;

-- CreateTable
CREATE TABLE "monitorsequence" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "sequenceCommand" JSONB NOT NULL,

    CONSTRAINT "monitorsequence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_mediaSequence" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_mediaSequence_AB_unique" ON "_mediaSequence"("A", "B");

-- CreateIndex
CREATE INDEX "_mediaSequence_B_index" ON "_mediaSequence"("B");

-- AddForeignKey
ALTER TABLE "monitorstatus" ADD CONSTRAINT "monitorstatus_sequenceId_fkey" FOREIGN KEY ("sequenceId") REFERENCES "monitorsequence"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mediaSequence" ADD CONSTRAINT "_mediaSequence_A_fkey" FOREIGN KEY ("A") REFERENCES "mediafile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mediaSequence" ADD CONSTRAINT "_mediaSequence_B_fkey" FOREIGN KEY ("B") REFERENCES "monitorsequence"("id") ON DELETE CASCADE ON UPDATE CASCADE;
