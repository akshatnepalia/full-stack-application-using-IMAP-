import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email, EmailDocument } from './schemas/email.schema';

@Injectable()
export class EmailService {
  constructor(@InjectModel(Email.name) private emailModel: Model<EmailDocument>) {}

  async processEmail(headers: string) {
    // Parse headers → extract chain
    const chain = this.extractChain(headers);

    // Detect ESP type (basic rules, extend as needed)
    const esp = this.detectESP(headers);

    // Save to DB
    const newEmail = new this.emailModel({
      rawHeaders: headers,
      chain,
      esp,
      createdAt: new Date(),
    });
    await newEmail.save();

    return { chain, esp };
  }

  private extractChain(headers: string) {
    const lines = headers.split('\n').filter(line => line.toLowerCase().startsWith('received:'));
    return lines.map((line, idx) => ({
      hop: idx + 1,
      detail: line.trim(),
      timestamp: new Date().toISOString(),
    }));
  }

  private detectESP(headers: string): string {
    if (headers.includes('google.com') || headers.includes('gmail.com')) return 'Gmail';
    if (headers.includes('outlook.com') || headers.includes('microsoft.com')) return 'Outlook';
    if (headers.includes('yahoo.com')) return 'Yahoo';
    if (headers.includes('zoho.com')) return 'Zoho';
    return 'Unknown';
  }
}
