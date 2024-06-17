import { Test, TestingModule } from '@nestjs/testing';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { PrismaService } from '../prisma/prisma.service';

describe('MediaController', () => {
  let controller: MediaController;
  let service:MediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports:[PrismaService],
      controllers: [MediaController],
      providers: [MediaService,PrismaService],
    }).compile();

    controller = module.get<MediaController>(MediaController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
