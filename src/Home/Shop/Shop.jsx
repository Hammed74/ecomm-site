import ShopGrid from "./ShopGrid"

export default function Shop({activeShoe, setActiveShoe}){
    return (
      <>
        <h1>SHOP</h1>
        <ShopGrid activeShoe={activeShoe} setActiveShoe={setActiveShoe}/>
      </>
    );
}