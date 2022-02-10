import Counter from "./components/counter/counter";
import CreditCard from "./components/credit-card/credit-card";
import DriverCard from "./components/driver-card/driver-card";
import Greetings from "./components/greetings/greetings";
import IdCard from "./components/id-card/id-card";
import LikeButton from "./components/like-button/like-button";
import Random from "./components/random/random";
import Rating from "./components/rating/rating";
 
function App() {

  return (
    <div className="container py-3">   
      <h1>IdCard</h1>   
      <IdCard 
        className="mb-2"
        firstName="John" 
        lastName="Doe" 
        gender="male" 
        height={178} 
        birth={new Date("1992-07-14")} 
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard 
        className="mb-2"
        firstName="Delores" 
        lastName="Obrien" 
        gender="female" 
        height={172} 
        birth={new Date("1988-05-11")} 
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>

      <Greetings lang="fr" className="mb-2">
        Peter
      </Greetings>
      <Greetings lang="de" className="mb-2">
        Bastian
      </Greetings>

      <h1>Random</h1>

      <Random className="mb-2" min={1} max={6}/>
      <Random className="mb-2" min={1} max={100}/>

      <h1>BoxColor</h1>
{/* 
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} /> */}

      <h1>CreditCard</h1>

      <div className="d-flex justify-content-between">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
      
      
      <h1>Rating</h1>
      
      <Rating className="mb-2">0</Rating>
      <Rating className="mb-2">1.49</Rating>
      <Rating className="mb-2">1.5</Rating>
      <Rating className="mb-2">3</Rating>
      <Rating className="mb-2">4</Rating>
      <Rating className="mb-2">5</Rating>
      <Rating className="mb-2" max={6}>6</Rating> 


      <h1>Driver Card</h1>
      <div className="mb-2">

        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>  
      
      <Counter />
      <LikeButton />
      <LikeButton />     
    </div>
  );
}


export default App;
