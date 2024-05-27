import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api2')
  app.enableCors(
    {
        origin: ['http://localhost:3001','http://trafficcenter.dvrdns.org:3001',
        'http://192.168.1.77:3001','http://192.168.1.41:3001',
        'http://192.168.1.111:3001','http://192.168.1.77:9000',
        'http://trafficcenter.dvrdns.org:3001','*','http://192.168.1.58'],
        credentials: true,
        exposedHeaders: ["set-cookie"]
    }
);
  const config = new DocumentBuilder()
    .setTitle('Watch Platform')
    .setDescription('The Watch API description')
    .setVersion('1.0')
    .addTag('watch')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('apitest', app, document);
    await app.startAllMicroservices();
    // app.useGlobalPipes(
    //   new ValidationPipe({
    //     whitelist:true,
    //     forbidNonWhitelisted:true,
    //     transform:true,
    //   }),
    // )
  await app.listen(3000);
}
bootstrap();
