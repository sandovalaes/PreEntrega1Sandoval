import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function CartWidget() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className='contenedor-cart'>
            <button className='button-cart d-flex flex-row' onClick={handleClick}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#0f4c62", fontSize: "30px" }} />
                <p>{count}</p>
            </button>
        </div>
    )
}

export default CartWidget