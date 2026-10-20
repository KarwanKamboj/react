import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() { // create state, manage state, change state and all child are synced
  const [name,setName] = useState('');
  

  return (
    <div>
      <Card title="Card1" nameVar={name} setName = {setName}/>
      <Card title="Card1" nameVar={name} setName = {setName}/>
      <p> I am inside Parent component and value of name is {name} </p>
    </div>
  )
}

export default App
