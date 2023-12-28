import '../styles/Landing.css'
import Shoe from '../assets/header-shoe.png'
import Jordan1 from '../assets/Jordan1Chicago.png'
import Jordan5 from "../assets/Jordan5Grape.png"



export default function Landing(){
    return (
      <>
        <div className="landing-container">
          <h1 className="title">
            The Ultimate <br></br> Sneaker Market Place
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            aut, tempora temporibus recusandae ipsam nesciunt.
          </p>
          <button className="main-button">GO TO SNEAKER</button>
          <div className="middle-row">
            <HeaderCard productShoe={Jordan1} text={'Jordan 1 "Chicago"'} price={"$180"}/>
              <div className="image-container">
                  <img className='header-shoe'
                    src={Shoe}
                    alt="main sneaker"
                  />
              </div>
              <HeaderCard productShoe={Jordan5} text={'Jordan 5 "Grape"'} price={"$220"}/>
          </div>
          <div className="blur-container">
            <div className="blur-layer">
              <div className="background-layer red"></div>
              <div className="background-layer green"></div>
            </div>
          </div>
        </div>
      </>
    );
}

function HeaderCard({productShoe, text, price}){
    return (
        <div className='card'>
            <h3>{text}</h3>
            <img src={productShoe} alt="" />
            <p>{price}</p>
            
        </div>
    )
}