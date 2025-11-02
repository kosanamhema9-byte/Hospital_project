import React, {useEffect, useState} from 'react'
import Patients from './pages/Patients'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'

export default function App(){
  const [view, setView] = useState('patients');
  return (
    <div className="app">
      <header>
        <h1>Hospital Management</h1>
        <nav>
          <button onClick={()=>setView('patients')}>Patients</button>
          <button onClick={()=>setView('doctors')}>Doctors</button>
          <button onClick={()=>setView('appointments')}>Appointments</button>
        </nav>
      </header>
      <main>
        {view==='patients' && <Patients />}
        {view==='doctors' && <Doctors />}
        {view==='appointments' && <Appointments />}
      </main>
    </div>
  )
}
