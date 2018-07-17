import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: String,
  permissions: [{ type: Schema.Types.ObjectId, ref: 'Permission' }],
});

export default mongoose.model('Group', GroupSchema);
