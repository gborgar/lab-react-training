

import BoxBordered from "../box-bordered/box-bordered";

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

