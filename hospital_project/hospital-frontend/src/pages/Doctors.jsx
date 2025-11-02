import React, {useEffect, useState} from 'react';
import { fetchJSON } from '../api';
export default function Doctors(){
  const [list,setList]=useState([]); const [form,setForm]=useState({name:'',department:'',contact:'',email:'',experience:''});
  const load = async ()=>{ try{ const d = await fetchJSON('/api/doctors'); setList(d);}catch(e){alert(e.message)} };
  useEffect(()=>{ load() },[]);
  const submit = async (e)=>{ e.preventDefault(); try{ await fetchJSON('/api/doctors',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); setForm({name:'',department:'',contact:'',email:'',experience:''}); load(); }catch(e){alert(e.message)} };
  const del = async (id)=>{ if(!confirm('Delete?')) return; await fetchJSON('/api/doctors/'+id,{method:'DELETE'}); load(); };
  return (<div className="container">
    <h2>Doctors</h2>
    <form onSubmit={submit}>
      <div className="form-row"><input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
      <div className="form-row"><input placeholder="Department" value={form.department} onChange={e=>setForm({...form,department:e.target.value})} /></div>
      <div className="form-row"><input placeholder="Contact" value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})} /></div>
      <div className="form-row"><input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
      <button type="submit">Add Doctor</button>
    </form>
    <hr/>
    <table className="table"><thead><tr><th>Name</th><th>Department</th><th>Contact</th><th>Email</th><th>Actions</th></tr></thead>
      <tbody>{list.map(d=> <tr key={d._id}><td>{d.name}</td><td>{d.department}</td><td>{d.contact}</td><td>{d.email}</td><td><button onClick={()=>del(d._id)}>Delete</button></td></tr>)}</tbody>
    </table>
  </div>)
}
