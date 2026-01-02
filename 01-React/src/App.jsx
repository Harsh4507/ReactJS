import { useState } from 'react';
import Header from './Header.jsx';
import User from './User.jsx';

const App = () => {
  const [Count,setCount]=useState(0);
    return (
    <div>
      <Header/>
      <h5 onClick={()=>{setCount(0)}}>Counter counts {Count}</h5>
      <button onClick={()=>setCount(Count+1)}>Increase count</button>
      <h5>Hi,not looking so eager to learn React!</h5>
    </div>
  )
}
export default App
