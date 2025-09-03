import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmailDocument = Email & Document;

@Schema()
export class Email {
  @Prop({ required: true })
  rawHeaders: string;

  @Prop({ type: Array })
  chain: Record<string, any>[];

  @Prop()
  esp: string;

  @Prop()
  createdAt: Date;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
