import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import cors from 'cors';

import patientRoutes from './routes/patientRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

await connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => res.send('Hospital Management API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
