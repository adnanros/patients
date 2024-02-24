import React, { useState } from "react";
import { useSelector } from "react-redux";

const PatientFilter = () => {
  const [ageToFilter, setAgeToFilter] = useState(0);
  // const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const [filteredPatients, setFilteredPatients] = useState(patients);

  const handleClickFilter = (e) => {
    e.preventDefault();
    // dispatch(setPatients(patients.filter(patient => patient.age>=ageToFilter)));
    setFilteredPatients(
      patients.filter((patient) => patient.age >= ageToFilter)
    );
  };

  return (
    <div>
      <input
        type="text"
        value={ageToFilter}
        onChange={(e) => setAgeToFilter(e.target.value)}
      />
      <button onClick={handleClickFilter} type="submit">
        Filter
      </button>
      <div>
        {/* <Table></Table> */}
        <ul>
          {filteredPatients.map((patient) => (
            <li>{patient.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientFilter;
