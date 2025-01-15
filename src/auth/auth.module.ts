import { Module } from '@nestjs/common';
import { ApiKeyStrategy } from './strategies/api-key-strategy';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([{ limit: 200, ttl: 60 * 60 * 24 * 1000 }]),
  ],
  providers: [ApiKeyStrategy],
})
export class AuthModule {}
