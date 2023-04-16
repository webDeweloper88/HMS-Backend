import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configServive = app.get(ConfigService)
  const port = configServive.get('port');
  await app.listen(port);
}
bootstrap();

