import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { HeaderAPIKeyStrategy } from 'passport-headerapikey';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'api-key',
) {
  constructor(private readonly config: ConfigService) {
    super({ header: 'x-api-key', prefix: '' }, true, (requestApikey, done) => {
      const apiKey = config.get('API_KEY');
      const isValid = requestApikey === apiKey;
      if (!isValid) return done(false);
      return done(null, true);
    });
  }
}
