const newfunction = () => {
  return (
    <>
    <h3>working.!</h3>
    <Fruit/>
    <p>sum is {sum()}</p>
    </>
  );
};

function Fruit(){
  return(
    <><h4>Apple</h4></>
  ); 
}

function sum(){
  return 2+2;
}

export default newfunction