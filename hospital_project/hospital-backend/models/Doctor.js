import mongoose from 'mongoose';
const doctorSchema = new mongoose.Schema({
  name:String,
  department:String,
  contact:String,
  email:String,
  experience:Number
},{timestamps:true});
export default mongoose.model('Doctor', doctorSchema);
