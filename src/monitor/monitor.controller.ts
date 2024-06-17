import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { CreateMonitorStatusDto,UpdateMonitorStatusDto } from './dto/monitor.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
@ApiTags('monitor')
@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Post()
  @ApiBody({type : CreateMonitorStatusDto})
  create(@Body() createMonitorDto: CreateMonitorStatusDto) {
    return this.monitorService.create(createMonitorDto);
  }

  @Get()
  findAll() {

    return this.monitorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monitorService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({type : UpdateMonitorStatusDto})
  update(@Param('id') id: string, @Body() updateMonitorDto: UpdateMonitorStatusDto) {
    return this.monitorService.update(id, updateMonitorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monitorService.remove(id);
  }
}
