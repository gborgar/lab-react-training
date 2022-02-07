
function IdCard({ className, lastName, firstName, gender, height, birth, picture }) {
  return(
    <div className={`border border-2 border-dark p2 d-flex ${className}`}>
      <img className="me-1" src={picture} alt={firstName} />
      <ul className="list-unstyled">
        <li><strong>First name:</strong> {firstName}</li>
        <li><strong>Last name:</strong> {lastName}</li>
        <li><strong>Gender:</strong> {gender}</li>
        <li><strong>Height:</strong> {height}</li>
        <li><strong>Birth:</strong> {birth.toDateString()}</li>
      </ul>   
    </div>
  );
}

export default IdCard;






// function IdCard(props) {
//   return (
//     <div className="idCard box">
//        <img src={props.picture} alt={props.firstName}/>
//       <div className="right">
//         <strong>First name: </strong>{props.firstName}
//         <br></br>
//         <strong>Last name: </strong>{props.lastName}
//         <br></br>
//         <strong>Gender: </strong>{props.gender}
//         <br></br>
//         <strong>Height: </strong>{props.height}
//         <br></br>
//         <strong>Birth: </strong>{props.birth.toString().slice(4,15)}
//         <br></br>
//       </div>
//     </div>
//   )
// }

// export default IdCard;