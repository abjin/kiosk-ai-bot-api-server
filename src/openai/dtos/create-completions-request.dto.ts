import { IsString } from 'class-validator';

export class CreateCompletionsRequestDto {
  @IsString()
  userInput: string;
}
