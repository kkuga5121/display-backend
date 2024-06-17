import { Injectable } from '@nestjs/common';
import { CreateMonitorStatusDto,UpdateMonitorStatusDto } from './dto/monitor.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MonitorService {
  constructor(
      private readonly prismaService: PrismaService,
  ){}
  async create(createMonitorDto: CreateMonitorStatusDto) {
    const create = await this.prismaService.monitorStatus.create({
      data: {
        ...createMonitorDto
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":create}
  }

  async findAll() {
    const monitors = await this.prismaService.monitorStatus.findMany({ }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });

    return {"data":monitors}
  }

  async findOne(id: string) {
    const monitors = await this.prismaService.monitorStatus.findUnique({
      where:{
        id:id
      }
     }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });

    return {"data":monitors}
  }

  async update(id: string, updateMonitorDto: UpdateMonitorStatusDto) {
    const update = await this.prismaService.monitorStatus.update({
      where:{
        id:id
      },
      data: {
        ...updateMonitorDto
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      return null
    });
    return {"data":update}
  }

  remove(id: string) {
    return `This action removes a #${id} monitor`;
  }
}
