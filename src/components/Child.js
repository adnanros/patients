import React, { useEffect } from 'react'

const Child = ({prop1, prop2}) => {

  useEffect(() =>{
    console.log('use Effect in Child, only when prop1 is changed');
    // updateProps();
  }, [prop1])
  // useEffect(() =>{}, [prop1]);
  console.log('Child component body runs on child component rendering');
  // updateProps();
  return (
    <div>
      <p>{prop1}</p>
      <p>{prop2}</p>
    </div>
  )
}

export default Child
