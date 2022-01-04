import { Document } from 'mongoose';

export interface AuditDoc extends Document {
  emailEncode: String;
  iat: Number;
  operation: String;
  entityChanged: String;
  trace: any;
}
export interface Audit {
  emailEncode: String;
  iat: Number;
  operation: String;
  entityChanged: String;
  trace: any;
}
