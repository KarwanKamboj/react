import "./App.css";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }
  function handleMouseOver() {
    alert("Para k upr mouse lekar aye ho");
  }
  function handleInputChange(e) {
    console.log("value till now: ", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // I am writing my custom behaviur down
    alert("form submit krdu kya");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      {/* <p onMouseOver={handleMouseOver} style={{ border: "1px solid black" }}>
        I am Para
      </p> */}

      {/* <button onClick={handleClick}>Click me</button> */}
    </div>
  );
}

export default App;
