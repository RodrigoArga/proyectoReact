import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    

    useEffect(() =>{
        const docRef = doc(db, 'items', id)

        getDoc(docRef).then(doc =>{
            const data = doc.data()
            const productAdapted = {id: doc.id, ...data}

            setProduct(productAdapted)
        })

    },[id])
    
    return(
        <ItemDetail {...product} />
    )
}

export default ItemDetailContainer