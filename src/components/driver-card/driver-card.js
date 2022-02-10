import Rating from "../rating/rating";
import './driver-card.css';


function DriverCard({ name, rating, img,  car }) {



return(
  <div className="driver-card d-flex w-100 p-3">
    <img className="m-0 align-self-center" src={img} alt={name} />
    <div className="p-2 align-self-center">
      <h4>{name}</h4>
      <Rating>{rating}</Rating>
      <small>{car.model} {car.licensePlate}</small>
    </div>
  </div>
)
}

export default DriverCard;