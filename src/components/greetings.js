
// function getGreeting(lang) {
//   let greeting = "";

//   if (lang === "de") {
//     greeting = "Hallo";
//   } else if (lang === "en") {
//     greeting = "Hello";
//   } else if (lang === "fr") {
//     greeting = "Bonjour";
//   } else {
//     greeting = "Hola";
//   }
//   return greeting;
// }

// function Greetings(props) {
  
//   return(
//     <div className="box">
//       <span>{getGreeting(props.lang)} {props.children}</span>
//     </div>
//   );
// }

// export default Greetings;

import BoxBordered from "./box-bordered/box-bordered";

function Greetings( {className, lang, children }) {
  let great;
  switch(lang) {
    case 'es':
      great = 'Hola';
      break;
    case 'de':
      great = 'Hallo';
      break;
    case 'fr':
      great = 'Bonjour';
      break;
    case 'en':
      default:
      great = 'Hello';
      break;
  }

  return(
    <BoxBordered className={className}>{great} {children}!</BoxBordered>
  );
}

export default Greetings;