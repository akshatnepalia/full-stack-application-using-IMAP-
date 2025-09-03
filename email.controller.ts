import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('process-email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async processEmail(@Body() body: { headers: string }) {
    return this.emailService.processEmail(body.headers);
  }
}
