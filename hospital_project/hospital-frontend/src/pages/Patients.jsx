import React, {useEffect, useState} from 'react';
import { fetchJSON } from '../api';
export default function Patients(){
  const [list,setList]=useState([]); const [form,setForm]=useState({name:'',age:'',gender:'',contact:'',address:'',medicalHistory:''});
  const load = async ()=>{ try{ const d = await fetchJSON('/api/patients'); setList(d);}catch(e){alert(e.message)} };
  useEffect(()=>{ load() },[]);
  const submit = async (e)=>{ e.preventDefault(); try{ await fetchJSON('/api/patients',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); setForm({name:'',age:'',gender:'',contact:'',address:'',medicalHistory:''}); load(); }catch(e){alert(e.message)} };
  const del = async (id)=>{ if(!confirm('Delete?')) return; await fetchJSON('/api/patients/'+id,{method:'DELETE'}); load(); };
  return (<div className="container">
    <h2>Patients</h2>
    <form onSubmit={submit}>
      <div className="form-row"><input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
      <div className="form-row"><input placeholder="Age" type="number" value={form.age} onChange={e=>setForm({...form,age:e.target.value})} /></div>
      <div className="form-row"><input placeholder="Gender" value={form.gender} onChange={e=>setForm({...form,gender:e.target.value})} /></div>
      <div className="form-row"><input placeholder="Contact" value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})} /></div>
      <div className="form-row"><textarea placeholder="Medical History" value={form.medicalHistory} onChange={e=>setForm({...form,medicalHistory:e.target.value})}></textarea></div>
      <button type="submit">Add Patient</button>
    </form>
    <hr/>
    <table className="table"><thead><tr><th>Name</th><th>Age</th><th>Gender</th><th>Contact</th><th>Actions</th></tr></thead>
      <tbody>{list.map(p=> <tr key={p._id}><td>{p.name}</td><td>{p.age}</td><td>{p.gender}</td><td>{p.contact}</td><td><button onClick={()=>del(p._id)}>Delete</button></td></tr>)}</tbody>
    </table>
  </div>)
}
