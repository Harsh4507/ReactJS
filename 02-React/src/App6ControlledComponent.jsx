import { useState } from "react";
import Checkboxes from "./Checkboxes.jsx";
import RadioDropdown from "./RadioDropdown.jsx";
const App6ControlledComponent = () => {
    const [Name,SetName]=useState("");
    const [Password,SetPassword]=useState("");
    const [Email,SetEmail]=useState("");
    function Clear(){
        SetName("");
        SetPassword("");
        SetEmail("");
    }
  return (
    <div>
      <h4>Controlled Component</h4>
      <form action="" method="get">
        <RadioDropdown/>
        <Checkboxes/>

        <p>Name : {Name}</p>
        <input type="text" value={Name} onChange={(e)=>SetName(e.target.value)} placeholder="Name" /><br/>
        <p>Password : {Password}</p>
        <input type="password" value={Password} onChange={(e)=>SetPassword(e.target.value)} placeholder="Password" /><br/>
        <p>Email : {Email}</p>
        <input type="text" value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Email" /><br/><br/>
        <button>Submit</button>
        <button onClick={Clear}>Clear</button>
      </form>
    </div>
  )
}

export default App6ControlledComponent
