import { useState } from "react";

const CheckoutForm = () =>{
    const [userName, setUserName] = useState('')
    const [userTel, setUserTel] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const submitData = () =>{
        setUserName(userName)
        setUserTel(userTel)
        setUserEmail(userEmail)
    }

    return(
        <div>
            <h4>Ingrese sus datos para continuar:</h4>
            <input type={"text"} placeholder="Nombre" value={userName} onChange = {(e) => setUserName(e.target.value)}/>
            <input type={"number"} placeholder="Telefono" value={userTel} onChange = {(e) => setUserTel(e.target.value)}></input>
            <input type={"email"} placeholder="Email" value={userEmail} onChange = {(e) => setUserEmail(e.target.value)}></input>
            <button onClick={submitData}>Aceptar datos</button>
        </div>
    )
}

export default CheckoutForm