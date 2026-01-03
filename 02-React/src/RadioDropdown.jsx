import {useState} from 'react'

const RadioDropdown = () => {
    const [selectedGender, setSelectedGender] = useState("male");
    const [selectedSkill, setSelectedSkill] = useState("");
  return (
    <div>
      <p>Radio Selected : {selectedGender}</p>
      <input type="radio" id="male" name="gender" value="male" onChange={(e)=>setSelectedGender(e.target.value)} checked={selectedGender==="male"}/>
      <label htmlFor="male">Male</label><br/>
      <input type="radio" id="female" name="gender" value="female" onChange={(e)=>setSelectedGender(e.target.value)} checked={selectedGender==="female"}    />
      <label htmlFor="female">Female</label><br/>
      <p>Selected Skill from Dropdown : {selectedSkill}</p>
      <select defaultValue={"Javascript"} value={selectedSkill} onChange={(e)=>setSelectedSkill(e.target.value)}>
        <option value="">Select Skill</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
        <option value="C++">C++</option>
      </select>
    </div>
  )
}

export default RadioDropdown
