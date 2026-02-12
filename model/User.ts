import mongoose, { Schema, model, models } from 'mongoose';

export interface IUser {
  username: string;
  email: string;
  password?: string; // Add password for registration
  avatar?: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Should be hashed!
  avatar: { type: String, default: '' },
}, { timestamps: true });

const User = models.User || model<IUser>('User', UserSchema);
export default User;