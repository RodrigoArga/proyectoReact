import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItems = ({id, name, quantity, price}) =>{
    const {itemRemove} = useContext(CartContext)    

    const removeItem = (remove) => {
        remove.stopPropagation()
        itemRemove(id)
    }
    
    return(
        <div className="d-flex justify-content-center">
            <div className="card mx-5 my-3" style={{width: 400, height:"auto"}} >
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <span>
                    <p className="card-text">Precio unitario: $ {price}</p>
                    </span>
                    <p>Cantidad: {quantity}</p>
                    <p>Subtotal: ${price*quantity}</p>
                    <div title="Remover del carrito">
                        <button className="btn btn-danger" onClick={removeItem}>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
    

export default CartItems