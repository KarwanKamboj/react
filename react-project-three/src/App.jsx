import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>

    <Button click={handleClick} text="Click Me">
      <h1>{count}</h1>
    </Button>


     <Card name="Karwan">
      <h1>React Learning</h1>
      <p>Trying to be consistent in this</p>
      <p>I will complete the course soon</p>
    </Card>

    <Card children="I am children">

    </Card>

    <Card children="I am also a children">
      <h4>This is overriding the  children</h4> 
    </Card>

    </div>
  )
}

export default App
