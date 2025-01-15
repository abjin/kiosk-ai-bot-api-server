import { Injectable } from '@nestjs/common';
import { menuMockData } from 'mock-data';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private openai = new OpenAI();
  private menuData = menuMockData;

  async createCompletions(userInput: string) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful AI chatbot that recommends menu items based on user preferences.',
        },
        {
          role: 'system',
          content:
            'From the provided Menu data, select one or more items that best fit the user preferences. Include the selected items in a "recommendedItems" list within a JSON object. If no suitable items are found, return an empty "recommended_items" array.',
        },
        {
          role: 'system',
          content:
            'Explain why these items were selected in Korean and include this explanation in a "description" field within the same JSON object.',
        },
        {
          role: 'user',
          content: `Menu data: ${JSON.stringify(this.menuData)}`,
        },
        {
          role: 'user',
          content: `Recommend based on: ${userInput}`,
        },
      ],
    });

    return completion.choices[0].message.content;
  }
}
