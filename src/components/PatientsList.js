import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setPatients } from '../store/actions/patientActions';

const PatientsList = () => {
  const dispatch =   useDispatch();
  const patients = useSelector((state)=> state.patients);

  useEffect(()=>{
    const fetchPatients = async ()=>{
        try {
            const response = await fetch('http://localhost:8080/users');
            const data = await response.json();
            dispatch(setPatients(data));
        } catch (e) { console.log(e); }
    };
    fetchPatients(); //
  }, [dispatch])

  return (
    <div>PatientsList
        <ul>
            {patients.map((patient, index)=>(<li key={index}>{patient.username}</li>))}
        </ul>
    </div>
  )
}

export default PatientsList