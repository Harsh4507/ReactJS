const Wrapper = ({children,color}) => {
  return (
    <div style={{color:color,backgroundColor:"black",border:"2px solid blue",padding:"10px",margin:"10px",width:"30rem",justifyContent :"center"}}>
      {children}
    </div>
    )
}
export default Wrapper
