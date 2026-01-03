import User from "./User"

//Props
const App4 = ({fname="No Name", age=18,...rest}) => {

    // 1. First correct way
    // let fname = obj.fname || "NoName"
    // let age = obj.age ?? 18

    // 2. Copying props in obj
    // let obj2 = {...obj}
    // obj2.fname = obj2.fname || "NoName"
    // obj2.age = obj2.age ?? 18

    // 3. Destructuring only required ones for large number of properties coming in props
  return (
    <div>
        <h3>Props</h3>
        <User name={fname} age={age} role="developer"/>
        <p>Gender : {rest.gender}</p>
        <p>Hello, {fname}!,you are {age} need to make something of it.</p>
    </div>
  )
}

export default App4