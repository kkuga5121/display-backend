import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMonitorSequenceDTO,UpdateMonitorSequenceDto } from './dto/sequence.dto';
import { PrismaService } from '../prisma/prisma.service';
import { connect } from 'http2';

@Injectable()
export class SequenceService {
  constructor(
      private readonly prismaService: PrismaService,
  ){}
  async create(createSequenceDto: CreateMonitorSequenceDTO) {
    let {mediafiles,monitors,sequenceCommand} =createSequenceDto;
    const monitorSequence = await this.prismaService.monitorSequence.create({
      data: {
        sequenceCommand: sequenceCommand,
        mediafiles:{
          connect: mediafiles.map((mediafileId) => ({ id: mediafileId })),
        }
        ,monitors:{
          connect:monitors.map((monitorId) => ({ id: monitorId }))
        }
      },
    });
    return {"data":monitorSequence};
  }

  async findAll() {
    const monitorSequence = await this.prismaService.monitorSequence.findMany({
      orderBy:{
        createdAt:"desc"
      }
    });
    
    return {"data":monitorSequence};
  }

  async findOne(id: string) {
    const monitorSequence = await this.prismaService.monitorSequence.findUnique({
      where:{
        id:id
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      throw new NotFoundException(`MonitorSequence with ID ${id} not found`);
    });
    
    return {"data":monitorSequence};
  }

  async update(id: string, updateMonitorSequenceDto: UpdateMonitorSequenceDto) {
    let {mediafiles,monitors,sequenceCommand} =updateMonitorSequenceDto;
    const updateData: any = {};
    if (sequenceCommand) {
      updateData.sequenceCommand = sequenceCommand;
    }

    if (mediafiles) {
      updateData.mediafiles = {
        connect: mediafiles.map((mediafileId) => ({ id: mediafileId })),
      };
    }

    if (monitors) {
      updateData.monitors = {
        connect: monitors.map((monitorId) => ({ id: monitorId })),
      };
    }

    const monitorSequence = await this.prismaService.monitorSequence.update({
      where: { id:id },
      data: updateData,
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      throw new NotFoundException(`MonitorSequence with ID ${id} not found`);
    });


    return {"data":monitorSequence};
  }

  async remove(id: string) {
    const monitorSequence = await this.prismaService.monitorSequence.delete({
      where:{
        id:id
      }
    }).catch((e)=>{
      console.log("create e",e)
      console.log("create e code",e.code)
      throw new NotFoundException(`MonitorSequence with ID ${id} not found`);
    });
    return {"data":monitorSequence};
  }
}
