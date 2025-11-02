import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({
  name:String,
  age:Number,
  gender:String,
  address:String,
  contact:String,
  medicalHistory:String
},{timestamps:true});
export default mongoose.model('Patient', patientSchema);
