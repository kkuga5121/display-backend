// dto/create-monitor-status.dto.ts

import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '../enum/status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMonitorStatusDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  monitorAddress: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  monitorPort: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  mediaId?: string;

  @IsNotEmpty()
  @IsEnum(Status)
  @ApiProperty()
  status: Status; // use the enum here

  @IsOptional()
  @IsString()
  @ApiProperty()
  sequenceId?: string;
}

export class UpdateMonitorStatusDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    monitorAddress?: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    monitorPort?: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    mediaId?: string;
  
    @IsOptional()
    @IsEnum(Status)
    @ApiProperty()
    status?: Status; // use the enum here
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    sequenceId?: string;
  }