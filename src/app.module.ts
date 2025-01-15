import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { OpenaiModule } from './openai/openai.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    { ...HttpModule.register({}), global: true },
    OpenaiModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
