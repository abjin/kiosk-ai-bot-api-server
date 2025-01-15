import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { CreateCompletionsRequestDto } from './dtos/create-completions-request.dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Get('/chat/completions')
  async createCompletions(@Query() dto: CreateCompletionsRequestDto) {
    const result = await this.openaiService.createCompletions(dto.userInput);
    console.log({ input: dto.userInput, result: JSON.stringify(result) });
    return result;
  }
}
