import Patient from '../models/Patient.js';
export const createPatient = async (req,res) => {
  try{
    const p = await Patient.create(req.body);
    res.status(201).json(p);
  }catch(err){ res.status(400).json({message:err.message});}
};
export const getPatients = async (req,res) => {
  const list = await Patient.find().sort({createdAt:-1});
  res.json(list);
};
export const getPatient = async (req,res) => {
  const p = await Patient.findById(req.params.id);
  if(!p) return res.status(404).json({message:'Patient not found'});
  res.json(p);
};
export const updatePatient = async (req,res) => {
  const p = await Patient.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(p);
};
export const deletePatient = async (req,res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({message:'deleted'});
};
