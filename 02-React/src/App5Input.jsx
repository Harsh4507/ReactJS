import { useState } from "react";
const App5Input = () => {
    const [Name, setName] = useState("Harsh");
  return (
    <div>
        <h4>Input Component</h4>
        <h4>Name : {Name}</h4>
        <input id="nameInput" type="text" placeholder="Enter your name" value={Name} onChange={(e) => setName(e.target.value)} />
        {
            // let val = $("#nameInput").val().trim();
            console.log($("#nameInput").val())
        }
    </div>
  )
}

export default App5Input;