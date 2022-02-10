
function BoxColor(props) {

  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  } 

  return(
    <div className="BoxColor box" style={divStyle}><span>rgb(${props.r}, ${props.g}, ${props.b})</span></div>
  ); 
}

export default BoxColor;