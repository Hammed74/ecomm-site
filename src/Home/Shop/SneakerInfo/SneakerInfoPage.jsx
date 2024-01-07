import { useParams } from "react-router-dom";
import { useState } from "react";
import "../../../styles/SneakerInfoPage.css";
import { products } from "../ProductList";
import check from "../../../assets/check.png"

export default function SneakerInfoPage({setCart, cart}) {
  const { name } = useParams();

  const product = products.find((product) => product.name === name);

 const [activeSize, setActiveSize] = useState(null);
 const [isOpen, setIsOpen] = useState(false)

  if (!product) {
    return <h1>Aint Nuffin Here</h1>;
  }
  function handleSetCart(obj){
    let newCartArray = [...cart, obj]
    setCart(newCartArray)
    console.log(newCartArray)
  }
function onAddToCart(){
  let newObj = {
    image: product.src,
    name: product.name,
    price: product.price,
    quantity: 1,
    size: activeSize,
    id: Date.now()
  }
handleSetCart(newObj)
handleSetIsOpen()

}

function handleSetActiveSize(size){
  setActiveSize(size)
}

function handleSetIsOpen(){
  setIsOpen(true)
  setTimeout(() => {
    setIsOpen(false)
    setActiveSize(null);
  }, 2000)
}

  return (
    <>
      {isOpen ? <dialog className="success-pop-up">
        <h3>ADDED TO CART </h3>
        <img className="check" src={check} alt="check" />
      </dialog> : null}
      <div className="about-page-container">
        <div className="about-container">
          <img src={product.src} alt="" />
          <div className="shoe-heading-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <p>{product.description}</p>
          <button className="add-to-cart" onClick={() => onAddToCart()}>
            ADD TO CART {product.price}
          </button>
          <div className="sizes-container">
            <h3>Available Sizes</h3>
            <div className="shoe-size-container">
              {product.sizes.map((size) => {
                return (
                  <button
                    style={
                      activeSize === size
                        ? { backgroundColor: "black", color: "white" }
                        : null
                    }
                    onClick={() => handleSetActiveSize(size)}
                    key={size}
                    className="size-button"
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
