import React from 'react';
import {useContext} from 'react';
import { themeContext } from './ThemeProvider';


const Cart = () => {
    const {cart,remove} = useContext(themeContext)
    
    return (
        <div>
            <table >
            <tbody>
                <tr>
                    <th>Detail</th>
                    <th>Price</th> 
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {cart && cart.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td className="disk"><img className="cartimage" src={item.image}/> <div><p>{item.detail}</p> <p className="text-link--accent " onClick={()=> remove(item)}>REMOVE</p></div> </td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.sum}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {/* <p>Total:{" "}{basket.total}</p>
            <p>TotalCount:{" "}{basket.itemCount}</p> */}
        </div>
    );
};

export default Cart;