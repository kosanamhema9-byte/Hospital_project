import React, {useEffect, useState} from 'react';
import { fetchJSON } from '../api';
export default function Appointments(){
  const [list,setList]=useState([]); const [patients,setPatients]=useState([]); const [doctors,setDoctors]=useState([]);
  const [form,setForm]=useState({patient:'',doctor:'',date:'',reason:''});
  const load = async ()=>{ try{ setList(await fetchJSON('/api/appointments')); setPatients(await fetchJSON('/api/patients')); setDoctors(await fetchJSON('/api/doctors')); }catch(e){alert(e.message)} };
  useEffect(()=>{ load() },[]);
  const submit = async (e)=>{ e.preventDefault(); try{ await fetchJSON('/api/appointments',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form, date: new Date(form.date)})}); setForm({patient:'',doctor:'',date:'',reason:''}); load(); }catch(e){alert(e.message)} };
  const del = async (id)=>{ if(!confirm('Delete?')) return; await fetchJSON('/api/appointments/'+id,{method:'DELETE'}); load(); };
  return (<div className="container">
    <h2>Appointments</h2>
    <form onSubmit={submit}>
      <div className="form-row"><select value={form.patient} onChange={e=>setForm({...form,patient:e.target.value})} required><option value="">Select Patient</option>{patients.map(p=> <option key={p._id} value={p._id}>{p.name}</option>)}</select></div>
      <div className="form-row"><select value={form.doctor} onChange={e=>setForm({...form,doctor:e.target.value})} required><option value="">Select Doctor</option>{doctors.map(d=> <option key={d._id} value={d._id}>{d.name}</option>)}</select></div>
      <div className="form-row"><input type="datetime-local" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required /></div>
      <div className="form-row"><input placeholder="Reason" value={form.reason} onChange={e=>setForm({...form,reason:e.target.value})} /></div>
      <button type="submit">Schedule</button>
    </form>
    <hr/>
    <table className="table"><thead><tr><th>Patient</th><th>Doctor</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>{list.map(a=> <tr key={a._id}><td>{a.patient?.name}</td><td>{a.doctor?.name}</td><td>{new Date(a.date).toLocaleString()}</td><td>{a.status}</td><td><button onClick={()=>del(a._id)}>Delete</button></td></tr>)}</tbody>
    </table>
  </div>)
}
