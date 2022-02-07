
import visaCard from '../../assets/images/visa.png';
import masterCard from '../../assets/images/master-card.svg';
import './credit-card.css';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  let cardLogo;
  switch(type) {
    case 'Master Card':
      cardLogo = masterCard;
      break;
    case 'Visa':
      default:
      cardLogo = visaCard;
      
  }
  
    return (
      <div style={{ backgroundColor: bgColor, color }} className="credit-card d-flex w-100 flex-column rounded-3 p-3">
    
        <img className="align-self-end" src={cardLogo} alt={type}/>
        <h4 className="m-0 align-self-center my-1">•••• •••• •••• {number.slice(-4)}</h4>
        <div className="d-flex">
          <small className="me-2">Expire {expirationMonth}/{expirationYear.toString().slice(-2)}</small>
          <small>{bank}</small>
        </div>
        <small>{owner}</small>
      
    </div>
    
  );
}
export default CreditCard;


