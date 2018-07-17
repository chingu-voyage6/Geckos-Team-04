import mongoose, { Schema } from 'mongoose';

const PermissionSchema = new Schema({
  name: String,
  description: String,
});

export default mongoose.model('Permission', PermissionSchema);
