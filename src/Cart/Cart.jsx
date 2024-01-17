import "../styles/cart.css";

export default function Cart({ cart, setCart }) {

  function removeAllItems(){
    setCart([])
  }
  return (
    <>
      {cart.length > 0 ? (
        <>
          <h1
            style={{
              margin: "5rem",
              fontSize: "6rem",
              letterSpacing: "0.6rem",
            }}
          >
            YOUR CART
          </h1>
          <div className="cart-header-grid">
            <span></span>
            <span>
              ITEM
            </span>
            <span>
              PRICE
            </span>
            <span>
              QUANTITY
            </span>
            <span>
              SIZE
            </span>
            <span>
              <button onClick={removeAllItems}>REMOVE ALL ITEMS</button>
            </span>
          </div>
          <div className="cart-page-container">
            {cart.map((shoe) => {
              return (
                <CartItem
                  key={shoe.id}
                  name={shoe.name}
                  image={shoe.image}
                  quantity={shoe.quantity}
                  price={shoe.price}
                  size={shoe.size}
                  cart={cart}
                  setCart={setCart}
                  id={shoe.id}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="empty-container">
          <h1 className="empty-cart" style={{ fontSize: "4rem" }}>
            There's Nothing In Your Cart
          </h1>
        </div>
      )}
    </>
  );
}

function CartItem({ name, image, quantity, price, size, cart, id, setCart }) {
  function onDelete(id) {
    setCart(cart.filter((shoe) => shoe.id != id));
  }
  return (
    <div className="cart-container">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{quantity}</h2>
      <h2>{size}</h2>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </div>
  );
}
