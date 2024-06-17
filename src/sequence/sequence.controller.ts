import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SequenceService } from './sequence.service';
import { CreateMonitorSequenceDTO,UpdateMonitorSequenceDto } from './dto/sequence.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('sequence')
@ApiTags('sequence')
export class SequenceController {
  constructor(private readonly sequenceService: SequenceService) {}

  @Post()
  @ApiBody({type:CreateMonitorSequenceDTO})
  create(@Body() createSequenceDto: CreateMonitorSequenceDTO) {
    return this.sequenceService.create(createSequenceDto);
  }

  @Get()
  findAll() {
    return this.sequenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sequenceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMonitorSequenceDto: UpdateMonitorSequenceDto
  ) {
    return this.sequenceService.update(id, updateMonitorSequenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sequenceService.remove(id);
  }
}
