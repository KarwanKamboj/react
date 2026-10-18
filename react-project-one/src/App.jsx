import './App.css';
import './components/UserCard.css';
import UserCard from './components/UserCard';
import alice from './assets/alice.jpg'
import john from './assets/john.jpg'
import sam from './assets/sam.jpg'

function App() {

  return (
    <div className='container'>
    <UserCard name="Alice" desc="Description1" image={alice} style={{"border":"solid 2px blue"}}/>
    <UserCard name="John" desc="Description2" image={john} style={{"border":"solid 2px blue"}}/>
    <UserCard name="Sam" desc="Description3" image={sam} style={{"border":"solid 2px blue"}}/>
    </div>
  )
}

export default App
