import { Module } from '@nestjs/common';
import { ApiKeyStrategy } from './strategies/api-key-strategy';

@Module({ providers: [ApiKeyStrategy] })
export class AuthModule {}
