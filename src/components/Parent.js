import React, {  useState } from "react";
import Child from "./Child";

const Parent = () => {
   const [prop1, setProp1] = useState('prop1');
   const [prop2, setProp2] = useState('prop2');
  
   
  console.log("Parent Component re-rendering...");
  return (
    <div>
      Parent
      <input type="text" value={prop1} onChange={(e)=>{setProp1(e.target.value);}} />
      <input type="text" value={prop2} onChange={(e)=>{setProp2(e.target.value);}} />
      <Child prop1={prop1} prop2={prop2} />
    </div>
  );
};

export default Parent;
