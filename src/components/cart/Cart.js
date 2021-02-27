import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const element = cart[i];
    //     total += element.population;
    // }
    let total = cart.reduce((accumulator, element) => accumulator + element.population, 0)
    return (
        <div className="infoCart">
            <h2>Added country : {cart.length}</h2>
            <h2>Total population is : {total}</h2>
        </div>
    );
};

export default Cart;