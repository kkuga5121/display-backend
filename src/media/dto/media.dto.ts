import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateMediaFileDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fileName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fileType: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  oriName: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  fileSize: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  filePath: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  description?: string;
}
  
  // dto/update-media-file.dto.ts
  export class UpdateMediaFileDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    fileName?: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    fileType?: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    oriName?: string;
  
    @IsOptional()
    @IsNumber()
    @ApiProperty()
    fileSize?: number;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    filePath?: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    description?: string;
  }
  export class FileOriginal{
    @IsString()
    @ApiProperty()
    oriname:string;
  }

  export class  FileId{
    @IsString()
    @ApiProperty()
    id:string;
  }