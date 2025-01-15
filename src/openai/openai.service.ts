import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
const openai = new OpenAI();

@Injectable()
export class OpenaiService {
  async createCompletions() {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: 'Write a haiku about recursion in programming.',
        },
      ],
    });

    return completion;
  }
}
