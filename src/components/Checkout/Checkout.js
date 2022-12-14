import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Notiflix from 'notiflix'
const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, totalPay, cartClear } = useContext(CartContext)
  const [id, setId] = useState(undefined)

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: 'Rodrigo',
                    phone: '123456789',
                    email: 'contactrodrigo@gmail.com'
                },
                items: cart,
                totalPay
            }
    
            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'items')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
        setId(orderAdded.id)
                return(
                    <div>
                        <h1> El id de su orden es: {orderAdded.id}</h1>
                        {cartClear()}
                    </div>
                )
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <CheckoutForm>
                
            </CheckoutForm>
            <button onClick={createOrder}>Enviar Orden</button>
           {id ? Notiflix.Report.success(
          '??Orden enviada!',
          `Su numero de orden es: ${id}`,
          'Entendido!',
          {
            width: '360px',
            svgSize: '120px',
          },
        ) : null} 
        </>
    )
}

export default Checkout