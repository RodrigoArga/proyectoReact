import { Link } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItems from "../CartItems/CartItems";

const Cart = () => {
    const {cart, cartClear, totalPay, cartQuantity} = useContext(CartContext) 

    if(!cartQuantity){
        return(
            <div style={{marginTop: '30vh'}}>
            <h2 style={{marginBottom: 40}}>Su carrito está vacío.</h2>
            <Link to={'/'}><button className="btn btn-danger">Volver a Inicio</button> </Link>
            </div>
        )
        }

    return(
        <div>
            {cart.map(prod => (<CartItems key={prod.id} {...prod}/>))}
            <div>
                <h3 style={{marginBottom: 40, marginTop: 40}}>Total de la compra: $ {totalPay}</h3>
                <button className="btn btn-outline-danger" onClick={cartClear} style={{marginBottom: 30}}> Vaciar carrito</button>
                <br></br>
                <Link to={'/checkout'}>
                    <button className="btn btn-danger">Finalizar Compra</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart