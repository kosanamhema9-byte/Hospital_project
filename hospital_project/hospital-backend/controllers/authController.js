import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

export const register = async (req,res) => {
  const {name,email,password,role} = req.body;
  try{
    const exist = await User.findOne({email});
    if(exist) return res.status(400).json({message:'User exists'});
    const hash = await bcrypt.hash(password,10);
    const u = await User.create({name,email,password:hash,role});
    res.status(201).json({id:u._id, name:u.name, email:u.email, role:u.role});
  }catch(err){ res.status(400).json({message:err.message}); }
};

export const login = async (req,res) => {
  const {email,password} = req.body;
  const u = await User.findOne({email});
  if(!u) return res.status(400).json({message:'Invalid credentials'});
  const ok = await bcrypt.compare(password, u.password);
  if(!ok) return res.status(400).json({message:'Invalid credentials'});
  const token = jwt.sign({id:u._id, role:u.role}, JWT_SECRET, {expiresIn:'7d'});
  res.json({token, user:{id:u._id, name:u.name, email:u.email, role:u.role}});
};
