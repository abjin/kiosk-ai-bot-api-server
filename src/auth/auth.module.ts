import { Module } from '@nestjs/common';
import { ApiKeyStrategy } from './strategies/api-key-strategy';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [ThrottlerModule.forRoot([{ limit: 3, ttl: 60 }])],
  providers: [ApiKeyStrategy],
})
export class AuthModule {}
