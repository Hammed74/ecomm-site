import { products } from "./ProductList";
import '../../styles/shop.css'
import { Link } from "react-router-dom";

export default function ShopGrid() {
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
            />
          </Link>
        </>
      ))}
    </div>
  );
}

function Item({ name, image, price, item }) {
  return (
    <div onClick={() => console.log(item.name)} className="item">
      <h3>{name}</h3>
      <img className={"shoe"+item.id} src={image} alt="item" />
      <p>{price}</p>
    </div>
  );
}
