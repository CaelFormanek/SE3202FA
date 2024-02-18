import './App.css';
import register from './Images/Register.png'

function App() {
  return (
    <div className="App">
      <img className="logoimage" src={register} ></img>
      <input className="emailinput" type="text" placeholder="Email"></input>
    </div>
  );
}

export default App;
