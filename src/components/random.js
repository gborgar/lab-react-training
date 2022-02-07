
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function Random(props) {
//   return(
//     <div className="greeting">
//       <span>Random value between {props.min} and {props.max} => {getRandomInt(props.min, props.max)}</span>
//     </div>
//   );  
// } 


// export default Random;

import BoxBordered from "./box-bordered/box-bordered";

function Random({ className, min, max }) {
  const rand = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <BoxBordered className={className}>Random number between {min} and {max} : {rand}</BoxBordered>
  );
}

export default Random;