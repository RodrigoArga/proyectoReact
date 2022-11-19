import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "Black"}}>
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mt-3 align-self-center">
                    <li className='nav-item'>
                        <Link to={'/'}><h1 className='mx-2' style={{color: "#F2F5FA",backgroundColor:"blueviolet"}} >Travel Sense</h1></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={`/category/yungas`}>
                            <button className='btn btn-secondary mx-sm-2 mx-lg-5'>Yungas</button>
                        </Link>                        
                    </li>    
                    <li className='nav-item'>
                        <Link to={`/category/norte`}>
                            <button className='btn btn-secondary mx-sm-2 mx-lg-5'>Norte y Puna</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/category/valles`}>
                            <button className='btn btn-secondary mx-sm-2 mx-lg-5'>Valles</button>
                        </Link>
                    </li>             
                </ul>
                <div>
                    <CartWidget />
                </div>
            </div>
    </nav>
    )
}

export default NavBar