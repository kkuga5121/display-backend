import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, StreamableFile, Query } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaFileDto,FileId,FileOriginal,UpdateMediaFileDto } from './dto/media.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { createReadStream } from 'fs';
import { join } from 'path';
import { v4 as uuid } from 'uuid';
@ApiTags('media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  create(@Body() createMediaDto: CreateMediaFileDto) {
    return this.mediaService.create(createMediaDto);
  }

  @Post('upload')@UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination:'./files',
        filename: (_request, file, callback) =>

          callback(null, `${uuid()}-${file.originalname}`),
      }),
    }),
  )
  @ApiBody({
    required: true,
    type: "multipart/form-data",
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @ApiConsumes("multipart/form-data")
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    let media:CreateMediaFileDto = {
      fileName:file.filename,
      oriName:file.originalname,
      fileType:file.mimetype,
      fileSize:file.size,
      filePath:file.path,
    }
    let {data}= await this.mediaService.create(media);
    
    return {file:file,data:data};
  }
  @Get('img/:imgpath')  //http://localhost:3000/api2/media/1716961892947-Capture.PNG
  seeUploadedFile(@Param('imgpath') image:string, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
  @Post('stream')
  @ApiBody({ type: FileOriginal })
  async getFile(@Res({ passthrough: true }) res,@Body() files:FileOriginal) {
    let media = await this.mediaService.findOneByOriginal(files);
    if(media.data != null){
      let data = media.data as CreateMediaFileDto;
      console.log(media.data)
      console.log(join(process.cwd(),data.filePath))
      const file = createReadStream(join(process.cwd(),data.filePath));
      res.set({
        'Content-Type': data.fileType,
        'Content-Disposition': `attachment; filename="${data.oriName}"`,
      });
      return new StreamableFile(file);
    }
    return res.status(404).send('Not found');
  }

  
  @Post('streamId')
  @ApiBody({ type: FileId })
  async getFileById(@Res({ passthrough: true }) res,@Body() files:FileId) {
    let media = await this.mediaService.findOneById (files);
    if(media.data != null){
      let data = media.data as CreateMediaFileDto;
      console.log(media.data)
      console.log(join(process.cwd(),data.filePath))
      const file = createReadStream(join(process.cwd(),data.filePath));
      res.set({
        'Content-Type': data.fileType,
        'Content-Disposition': `attachment; filename="${data.oriName}"`,
      });
      return new StreamableFile(file);
    }
    return res.status(404).send('Not found');
  }

  
  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get('seq/:id')
  findMediaInSequence(@Param('id') id: string) {
    return this.mediaService.findAllBySequence(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaFileDto) {
    return this.mediaService.update(id, updateMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(id);
  }
}
