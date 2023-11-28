import React,{useState} from 'react'

export default function User({name}) {
  const [count,setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Mumbai</h3>
      <h4>Contact: 364853748</h4>
    </div>
  );
}
