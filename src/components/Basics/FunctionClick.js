const FunctionClick = () => {
  const clickHandler = () => {
    alert('Button Clicked');
  }
  return ( 
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
   );
}
 
export default FunctionClick;