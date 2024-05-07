import { data } from "./data";

function Buttons ({setClothes}) {

    const filtredClothes=(searchTerm) => {
        const newClothesArray=data.filter(item=>item.searchTerm.includes(searchTerm))
        setClothes(newClothesArray)
    }


    return (
<div className="btn">
    <button className="change" onClick ={()=> filtredClothes("man")}>Man</button>
    <button className="change" onClick ={()=> filtredClothes("woman")}>Woman</button>
    <button className="change" onClick ={()=> filtredClothes("dress")}>Dress</button>
    <button className="change" onClick ={()=> filtredClothes("pants")}>Pants</button>
    <button className="change" onClick ={()=> filtredClothes("skirt")}>Skirt</button>
    <button className="change" onClick ={()=> filtredClothes("shoes")}>Shoes</button>
    <button className="change" onClick ={()=> filtredClothes("shirt")}>Shirt</button>
</div>
    )
}
export default Buttons;