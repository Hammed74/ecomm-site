import { Link } from 'react-router-dom'
import '../styles/nav.css'


export default function Nav(){
    return(
        <div className="nav-container">
            <div className="logo-container">
                <h2>LIME</h2>
            </div>
            <ul className='nav-list'>
                <Link to="/" ><li>HOME</li></Link>
                <Link to={"/shop"}><li>SHOP</li></Link>
                <li>ABOUT</li>
            </ul>
            <div className="cart-icon-container">
                <div className='cart'>CART</div>
                <span className='cart-badge'>5</span>
            </div>
        </div>
    )
}