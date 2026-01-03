import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import App5Input from './App5Input.jsx'
import App6ControlledComponent from './App6ControlledComponent.jsx' 

let objarray=[{fname:"Harsh", age:23,gender:'male'}, {fname:"John", age:22,gender:'male'}, {}]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* {objarray.map((obj)=><App4 fname={obj.fname} age={obj.age}/>)} */}
    {/* <App5Input /> */}
    <App6ControlledComponent/>
  </StrictMode>,
)
//@tag:nextEditSuggestions