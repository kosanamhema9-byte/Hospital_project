import Doctor from '../models/Doctor.js';
export const createDoctor = async (req,res) => {
  try{ const d = await Doctor.create(req.body); res.status(201).json(d);}catch(err){res.status(400).json({message:err.message});}
};
export const getDoctors = async (req,res) => {
  const list = await Doctor.find().sort({createdAt:-1});
  res.json(list);
};
export const updateDoctor = async (req,res) => {
  const d = await Doctor.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(d);
};
export const deleteDoctor = async (req,res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({message:'deleted'});
};
