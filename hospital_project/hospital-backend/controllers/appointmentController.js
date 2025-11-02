import Appointment from '../models/Appointment.js';
export const createAppointment = async (req,res) => {
  try{ const a = await Appointment.create(req.body); res.status(201).json(a);}catch(err){res.status(400).json({message:err.message});}
};
export const getAppointments = async (req,res) => {
  const list = await Appointment.find().populate('patient').populate('doctor').sort({date:1});
  res.json(list);
};
export const updateAppointment = async (req,res) => {
  const a = await Appointment.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(a);
};
export const deleteAppointment = async (req,res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({message:'deleted'});
};
