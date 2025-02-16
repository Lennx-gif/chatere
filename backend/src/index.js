import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import {connectDB} from './lib/db.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use(cookieParser());

app.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
    connectDB();
});