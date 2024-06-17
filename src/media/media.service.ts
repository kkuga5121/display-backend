import { Injectable } from '@nestjs/common';
import { CreateMediaFileDto,FileId,FileOriginal,UpdateMediaFileDto } from './dto/media.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Field } from 'multer';

@Injectable()
export class MediaService {
  constructor(
      private readonly prismaService: PrismaService,
  ){}

  async create(createMediaDto: CreateMediaFileDto) {
      const create = await this.prismaService.mediaFile.create({
        data: {
          ...createMediaDto
        }
      }).catch((e)=>{
        console.log("create e",e)
        console.log("create e code",e.code)
        return null
      });
    return {"data":create}
  }

  async findAll() {
    const media = await this.prismaService.mediaFile.findMany({
      orderBy:{
        createdAt:"desc"
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":media} 
  }


  async findAllBySequence(id:string) {
    const media = await this.prismaService.mediaFile.findMany({
      where:{
        sequences:{
          some:{
            id:id
          }
        }
      },
      orderBy:{
        createdAt:"desc"
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":media} 
  }

  async findOne(id: string) {
    const media = await this.prismaService.mediaFile.findUnique({
      where:{
        id:id
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":media} 
  }

  async findOneByOriginal(files:FileOriginal) {
    const media = await this.prismaService.mediaFile.findFirst({
      where:{
        oriName:files.oriname
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":media}
  }

  async findOneById(files:FileId) {
    const media = await this.prismaService.mediaFile.findUnique({
      where:{
        id:files.id
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":media}
  }

  async update(id: string, updateMediaDto: UpdateMediaFileDto) {

    const media = await this.prismaService.mediaFile.update({
      where:{
        id:id
      },data:{
        ...updateMediaDto
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":media} 
  }

  async remove(id: string) {
    const media = await this.prismaService.mediaFile.delete({
      where:{
        id:id
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":media} 
  }
}
