import {useState} from 'react'

const Checkboxes = () => {
  const [checkedLanguages, setCheckedLanguages] = useState(['Java']);

  const handleCheckboxChange = (language,checked) => {
    console.log(language,checked);
    if(checked){
        setCheckedLanguages([...checkedLanguages, language]);
    }
    else{
        setCheckedLanguages(checkedLanguages.filter(x=>x!=language));
    }
    // also correct way to do it,here just checking if checked or not here in above code checked is already coming as parameter so no need to do it here.
    // if (checkedLanguages.includes(language)) {
    //   setCheckedLanguages(checkedLanguages.filter(item => item !== language));
    // } else {
    //   setCheckedLanguages([...checkedLanguages, language]);
    // }
  };

  return (
    <div>
      <h4>Working with Checkboxes</h4>
      <p>Selected Language : {checkedLanguages.join(', ')}</p>
      <input type="checkbox" checked={checkedLanguages.includes("Java")} id="Java" value="Java" onChange={(e) => handleCheckboxChange(e.target.value,e.target.checked)}/>
      <label htmlFor="Java">Java</label><br/>
      <input type="checkbox" checked={checkedLanguages.includes("Python")} id="Python" value="Python" onChange={(e) => handleCheckboxChange(e.target.value,e.target.checked)}/>
      <label htmlFor="Python">Python</label><br/>
      <input type='checkbox' checked={checkedLanguages.includes("JavaScript")} id="JavaScript" value="JavaScript" onChange={(e) => handleCheckboxChange(e.target.value,e.target.checked)}/>
      <label htmlFor="JavaScript">JavaScript</label><br/>
      <input type='checkbox' checked={checkedLanguages.includes("C++")} id="C++" value="C++" onChange={(e) => handleCheckboxChange(e.target.value,e.target.checked)}/>
      <label htmlFor="C++">C++</label><br/>
      <input type='checkbox' checked={checkedLanguages.includes("C#")} id="C#" value="C#" onChange={(e) => handleCheckboxChange(e.target.value,e.target.checked)}/>
      <label htmlFor='C#'>C#</label><br/>
    </div>
  )
}

export default Checkboxes
