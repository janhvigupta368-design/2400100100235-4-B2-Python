import { useState } from "react";

export default function StudentForm() {
  const [data, setData] = useState({ name: "", roll: "", id: "" });

  return (
    <div className="container">
      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})}/>
      <input placeholder="Roll" onChange={e => setData({...data, roll: e.target.value})}/>
      <input placeholder="ID" onChange={e => setData({...data, id: e.target.value})}/>
      
      <h3>{data.name}</h3>
      <h3>{data.roll}</h3>
      <h3>{data.id}</h3>
    </div>
  );
}