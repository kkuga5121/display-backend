-- CreateTable
CREATE TABLE "mediafile" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "oriName" TEXT,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "filePath" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "mediafile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monitorstatus" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "monitorAddress" TEXT NOT NULL,
    "monitorPort" TEXT NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "monitorstatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "monitorstatus" ADD CONSTRAINT "monitorstatus_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "mediafile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
