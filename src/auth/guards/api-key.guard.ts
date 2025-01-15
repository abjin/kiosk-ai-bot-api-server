import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class ApiKeyGuard extends AuthGuard(['api-key']) {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
