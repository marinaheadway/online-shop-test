import {Link} from "react-router-dom";

function Clothes ({itemsForSale}) {

    return (
        <div className="products">
               {itemsForSale.map ((item=> {
        const {id, name, searchTerm, price, image} = item;


        return (
            <div  className="product-card" key={id}>
                <Link to={`/about/${item.title}`}>
  <img src= {image} width ="300px" height="400px" alt="cloth"/>
  </Link>
  <div className="product-info">
                <h3>{name}</h3>
                <h4>$ {price}</h4>
                           </div>
            </div>
                );

    }))}
        </div>

    )
 
   
}


export default Clothes;