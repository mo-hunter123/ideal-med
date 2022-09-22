import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  const config: ConfigService = app.get(ConfigService)
  const port: number = config.get<number>('PORT')

  app.useStaticAssets(join(__dirname, '..', 'public')); 
  app.setBaseViewsDir(join(__dirname, '..', 'views')); 
  app.setViewEngine('hbs'); 

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'))
  });
}
bootstrap();
