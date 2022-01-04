import { Document } from 'mongoose';

export interface ApisDoc extends Document {
  nameProyect: string;
  iat: number;
  port: number;
  asociatedSecret: string;
  lastConectionIat: number;
}
export interface Apis {
  nameProyect: string;
  iat: number;
  port: number;
  asociatedSecret: string;
  lastConectionIat: number;
}
