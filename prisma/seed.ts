// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const mediaFiles = [
    {
      id: '1e837ad3-f676-4aaf-8f85-0e4b61f00eb3',
      fileName: 'example1.jpg',
      fileType: 'image/jpeg',
      fileSize: 102400,
      filePath: '/uploads/example1.jpg',
      description: 'An example image file 1',
    },
    {
      id: '2e937bd4-g787-5baf-9f86-1e5b72g11fc4',
      fileName: 'example2.mp4',
      fileType: 'video/mp4',
      fileSize: 2048000,
      filePath: '/uploads/example2.mp4',
      description: 'An example video file',
    },
    {
      id: '3e107bc5-h898-6caf-af87-2e6b83h22gd5',
      fileName: 'example3.png',
      fileType: 'image/png',
      fileSize: 51200,
      filePath: '/uploads/example3.png',
      description: 'An example image file 2',
    }
  ];

  for (const mediaFile of mediaFiles) {
    await prisma.mediaFile.create({
      data: mediaFile,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
