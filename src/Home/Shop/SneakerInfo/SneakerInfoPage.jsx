import { useParams } from "react-router-dom"
import '../../../styles/SneakerInfoPage.css'
import { products } from "../ProductList"
import Nav from "../../Nav"

export default function SneakerInfoPage(){
    const { name } = useParams()
    console.log(name)

    const product = products.find((product) => product.name === name);

    if(!product){
       return <h1>Aint Nun Here</h1>
    }

    return (
      <>
        <Nav />
        <div className="about-page-container">
          <div className="about-container">
            <img src={product.src} alt="" />
            <div className="shoe-heading-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
            <p>{product.description}</p>
            <button>ADD TO CART {product.price}</button>
            <div className="sizes-container">
                <h3>Available Sizes</h3>
                <div className="shoe-size-container">
                    {product.sizes.map(size => {
                        return <button key={size} className="size-button">{size}</button>
                    })}
                </div>
            </div>
          </div>
        </div>
      </>
    );
}