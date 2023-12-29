import "../styles/cart.css"

export default function Cart({cart, setCart}){
    return (
      <>
        {cart.length > 0 ? (
          <div className="cart-page-container">
            {cart.map((shoe) => {
              return (
                <CartItem
                  key={shoe.name}
                  name={shoe.item}
                  image={shoe.image}
                  quantity={shoe.quantity}
                  price={shoe.price}
                  size={shoe.size}
                />
              );
            })}
          </div>
        ) : <h1 style={{marginTop: '40vh', fontSize: '4rem'}}>There's Nothing In Your Cart</h1>}
      </>
    );
}

function CartItem({name, image, quantity, price, size}){
    return (
<div className="cart-container">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h2>{price}</h2>
            <h2>{quantity}</h2>
            <h2>{size}</h2>
            <button>delete button</button>
        </div>
    )
}