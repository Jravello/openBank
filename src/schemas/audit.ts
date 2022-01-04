import { model, Schema } from 'mongoose';
import { AuditDoc } from '../interface/audit';

const auditSchema = new Schema(
  {
    emailEncode: { type: String },
    iat: { type: Number },
    operation: { type: String },
    entityChanged: { type: String },
    trace: { type: Schema.Types.Mixed },
  },
  { collection: 'Audit', timestamps: true }
);

export default model<AuditDoc>('Audit', auditSchema);
