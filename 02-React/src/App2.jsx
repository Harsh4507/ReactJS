import { useState } from 'react'
const App2 = () => {
    let fruit = "Apple";
    var [fruitname, setFruitname] = useState("Select fruit");
    const [Count, setCount] = useState(0);
    return (
    <div>
      <p>App2 Just started working here in this component.!</p>
      <p>{fruit}</p>
      <p>{fruitname}</p>
      <button onClick={()=>setFruitname("Apple")}>Apple</button>
      <button onClick={()=>setFruitname("Mango")}>Mango</button>
      <button onClick={()=>setFruitname("Guava")}>Guava</button>
      <button onClick={()=>setFruitname("Select Fruit")}>Reset</button>
      <h4>Click Counts : {Count}</h4>
      <button onClick={()=>setCount(Count+1)}>+</button>
      <button onClick={()=>setCount(Count-1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default App2
