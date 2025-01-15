import { Controller, Get, Query } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { CreateCompletionsRequestDto } from './dtos/create-completions-request.dto';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Get('/chat/completions')
  async createCompletions(@Query() dto: CreateCompletionsRequestDto) {
    const result = await this.openaiService.createCompletions(dto.userInput);
    return result;
  }
}
