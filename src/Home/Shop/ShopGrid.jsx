import { products } from "./ProductList";
import '../../styles/shop.css'
import { Link } from "react-router-dom";

export default function ShopGrid({setActiveShoe}) {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <>
          <Link to={`/shop/${item.name}`}>
            <Item
              item={item}
              key={item.name}
              name={item.name}
              image={item.src}
              price={item.price}
              setActiveShoe={setActiveShoe}
            />
          </Link>
        </>
      ))}
    </div>
  );
}

function Item({ name, image, price, item, setActiveShoe }) {
  function handleSetActiveShoe(){
    let newCartItem = {item: name, image: image, price:price, quantity: 1}
    setActiveShoe(newCartItem)
  }
  return (
    <div onClick={(item) => handleSetActiveShoe(item)} className="item">
      <h3>{name}</h3>
      <img className={"shoe" + item.id} src={image} alt="item" />
      <p>{price}</p>
    </div>
  );
}
