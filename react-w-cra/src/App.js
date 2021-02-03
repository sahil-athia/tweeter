import logo from './logo.svg';
import './App.css';
const message = "i am a message"
const buttonStyle = {fontSize: "4em", backgroundColor: "red"}

function App() {
  // we are currently using JSX, notice className not class
  // babel is changing this to createElement statements
  // all properties must be camelCased, there cant be dashes-like-this
  //
  return (
    <div className="App">
     <p>{message}</p>
     <p>{3 + 8}</p>
     <button id="niceButton" style={buttonStyle}>BUTTON</button>
    </div>
  );
}

export default App;
