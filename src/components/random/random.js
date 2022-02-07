
import BoxBordered from "../box-bordered/box-bordered";

function Random({ className, min, max }) {
  const rand = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <BoxBordered className={className}>Random number between {min} and {max} : {rand}</BoxBordered>
  );
}

export default Random;