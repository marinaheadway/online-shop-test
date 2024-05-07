import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes";
import Buttons from "./Buttons";

function Home() {

    const [clothes, setClothes]=useState(data);
  
    const chosenClothes =(searchTerm)=>{
      const newClothes=data.filter (element => element.searchTerm ===searchTerm);
      setClothes(newClothes);
      }
    
    
       return (
  <div>
    <div className="cont">
  
        <h2 className="back">Standard Free Shipping</h2>
     
    </div>
  {/* <Buttons filteredClothes={chosenClothes} /> */}
  <Buttons setClothes={setClothes} />
  <Clothes itemsForSale={clothes}/>
  </div>
  
    );
  }

  export default Home;