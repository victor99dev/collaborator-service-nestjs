import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/http/app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
  });

  const config = new DocumentBuilder()
    .setTitle('collaborator-service')
    .setDescription('employee creation service')
    .setVersion('1.0.0')
    .setContact('Victor99dev', 'https://github.com/torugo99', '')
    .setLicense(
      'Copyright (c) 2023, Victor99dev, Todos os direitos reservados.',
      'https://github.com/torugo99',
    )
    .setExternalDoc('Open Api: swagger-ui-json', '/swagger-ui-json')
    .build();

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger-ui', app, document);

  app.enableCors();
  await app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000/swagger-ui');
  });
}

bootstrap();
