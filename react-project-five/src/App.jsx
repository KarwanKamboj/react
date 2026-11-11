import { useState } from "react";
import "./App.css";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LogoutBtn />;
  }

  return (
    <div>
      <h1> welcome to my react learning</h1>
      <div>{isLoggedIn && <LogoutBtn />}</div>
    </div>
  );

  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/> }
  //   </div>
  // )

  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
}

export default App;
