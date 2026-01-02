import { createElement } from "react";
import Logout,{Login,Setting,Username} from "./UserComponent.jsx";


  function Browser(){
    alert(`You are using browser1`);
  }

const newfunction = () => {
  function Browser(){
    alert(`You are using browser2`); //this function will be prioritized, as it is inside the component.
  }
  function justCalling(){
    alert("Just Calling Function inside component");
  }
  function fruit(fruitName){
    alert(`${fruitName} function called`);
  }
  let fname="Prank";
  const arrobj=[{
    id: 1,
    fname:"Harsh",
    lname:"Rajput",
    age:23
  },
{
    id: 2,
    fname:"Rhino",
    lname:"Thakur",
    age:23
  },
{
    id: 3,
    fname:"Test",
    lname:"Baniya",
    age:22
  }];
  const Trying=()=>{
    return "just trying things...!";
  }

  function Trying2(){
    if(true){
      return "It's just javascript can use Javascript concepts and syntax here very smoothly.";
    }
  }

  return (
    <>
    {arrobj.map((person) => (
      <p key={person.id}>
        {person.fname} {person.lname} is {person.age} years old.
      </p>
    ))}

    <div onClick={justCalling}>Call me</div>

    <h3>working.!</h3>
    <Login/>
    <Logout/>
    <Setting/>
    <Fruit/>
    <button onClick={() => fruit("Apple")}>Apple</button>
    <button onClick={() => fruit("Mango")}>Mango</button>
    <button onClick={() => Browser()}>Browser</button>
    <p className="username">Username is {Username?Username:"No user found"}</p>
    <p>{fname?fname:"No fname found.!"}</p>
    <p>sum is {sum()}</p>
    <WithoutJSX/>
    <p>{Trying()}</p>
    <Trying/><br/>
    <Trying2/><br/>
    <img src="data:image/jpeg;base64,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"/>
    </>
  );
};

function Fruit(){
  const age = 5;
  return(
    <><h4>Apple {age}</h4>
    </>
  ); 
}

function sum(){
  return 2+2;
}

const WithoutJSX = () => {
  return createElement('div',null,"Hey there! it's without JSX") ;
}


export default newfunction