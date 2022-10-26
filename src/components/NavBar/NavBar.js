import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar justify-content-between mb-5" style={{backgroundColor: "Azure"}}>
            <div>
                <Link to={'/'}><h1 className='mx-2' style={{color: "rgba(147, 66, 158, 0.945)"}}>Travel Sense Jujuy</h1></Link>
            </div>
            <div>
                <Link to={`/category/yungas`}>
                    <button className='btn btn-secondary mx-5'>Yungas</button>
                </Link>
                <Link to={`/category/norte`}>
                    <button className='btn btn-secondary mx-5'>Norte y Puna</button>
                </Link>
                <Link to={`/category/valles`}>
                    <button className='btn btn-secondary mx-5'>Valles</button>
                </Link>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar