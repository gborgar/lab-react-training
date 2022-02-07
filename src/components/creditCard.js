
import visaCard from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg';
import './credit-card.css';

function CreditCard({ 
  type, 
  number, 
  expirationMonth, 
  expirationYear, 
  bank, 
  owner, 
  bgColor, 
  color}) {
  
    let card;
  switch(type) {
    case 'Visa':
      card = visaCard;
      break;
    case 'Master Card':
      default:
      card = masterCard;
      break;
  }
    return (
      <div style={{ backgroundColor: bgColor, color: color }} className="card d-flex flex-column rounded-3 p-3">
        <div className="type">
          <img className="imgCard align-self-end" src={card} alt={bank}/>
          <h4 className="m-o align-self-center">•••• •••• •••• {number.slice(-4)}</h4>
          <p>Expire {expirationMonth}/{expirationYear.toString().slice(-2)}</p>
          <p>{owner}</p>
          <p>{bank}</p>
        </div>
      </div>
      
    );
}
export default CreditCard;

// function getLogo(type) {
//   if (type === 'Visa') {
//     return '/visa.png';
//   }
//   return '/master-card.svg'
// }

// function CreditCard(props) {
//   const divStyle = {
//     backgroundColor: props.bgColor,
//     color: props.color
//   };

//   return(
//     <div className="creditCard" style={divStyle}>
//       <div className="type">
//         <img src={getLogo(props.type)} alt={props.type}/>
//       </div>
//       <div className="number">
//         <span>.... .... .... {props.number.slice(-4)}</span>
//       </div>
//       <div className="expire-bank">
//         <span>Expires  {props.expirationMonth}/{props.expirationYear}</span>
//         <span className="bank">{props.bank}</span>  
//       </div>
//       <div className="owner">
//         <span>{props.owner}</span>
//       </div>  
//     </div>
//   ); 
// }

// export default CreditCard;