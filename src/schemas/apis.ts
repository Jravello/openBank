import { model, Schema } from 'mongoose';
import { ApisDoc } from '../interface/apis';

const apisSchema = new Schema(
  {
    nameProyect: { type: String },
    iat: { type: Number },
    port: { type: Number },
    asociatedSecret: { type: String },
    lastConectionIat: { type: Number },
  },
  { collection: 'Apis', timestamps: true }
);

export default model<ApisDoc>('Apis', apisSchema);
