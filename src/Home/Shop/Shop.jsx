import ShopGrid from "./ShopGrid"

export default function Shop({activeShoe, setActiveShoe}){
    return (
      <>
        <h1 className="shop-header"> SNEAKER SHOP</h1>
        <ShopGrid activeShoe={activeShoe} setActiveShoe={setActiveShoe}/>
      </>
    );
}