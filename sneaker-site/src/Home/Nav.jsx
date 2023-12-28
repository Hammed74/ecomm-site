import '../styles/nav.css'


export default function Nav(){
    return(
        <div className="nav-container">
            <div className="logo-container">
                <h2>LIME</h2>
            </div>
            <ul className='nav-list'>
                <li>HOME</li>
                <li>SHOP</li>
                <li>ABOUT</li>
            </ul>
            <div className='cart'>CART</div>
        </div>
    )
}