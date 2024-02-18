import './App.css';
import register from './Images/Register.png'

function App() {
  return (
    <div className="App">
      <img className="logoimage" src={register} ></img>

      <div className="buttonsandinput">
        <small className="emailheader">Email</small>
        <input className="emailinput" type="text" placeholder=""></input>

        <small className="createpasswordheader">Create Password</small>
        <div>
          <input className="createpasswordinput" type="text" placeholder=""></input>
          <button className="togglecreatepassword">insert icon</button>
        </div>
        
        <small className="confirmpasswordheader">Confirm Password</small>
        <div>
          <input className="confirmpasswordinput" type="text" placeholder=""></input>
          <button className="toggleconfirmpassword">insert icon</button>
        </div>
      </div>
    </div>
  );
}

export default App;
