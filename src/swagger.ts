import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';
import { name as packageName } from '../package.json';

export function useSwagger(app: INestApplication, path = 'api-docs') {
  const configService = app.get(ConfigService);
  const username = configService.get('SWAGGER_USERNAME');
  const password = configService.get('SWAGGER_PASSWORD');

  if (!username || !password) return;

  app.use(
    [`/${path}`],
    expressBasicAuth({
      challenge: true,
      users: { [username]: password },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle(`${packageName}`)
    .setDescription(`${packageName} description`)
    .setVersion('1.0')
    .addBasicAuth({ 'x-tokenName': 'x-api-key', type: 'apiKey' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/${path}`, app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
}
