import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks';
mongoose
    .connect(mongoURI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));
export default mongoose.connection;
