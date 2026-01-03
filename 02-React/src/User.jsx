import Wrapper from "./Wrapper"

const User = ({name="Test", age=30, role}) => {
  return (
    <div>
        <hr/>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
      <Wrapper color="Beige">
        <p>This is wrapped content for {name}</p>
        <p>Passing details of this user.</p>
      </Wrapper>
    </div>
  )
}

export default User
