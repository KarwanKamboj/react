import {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className="counter-container">
        <p className="para"> You have clicked me {count} times</p>
        <button className="btn" onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter
