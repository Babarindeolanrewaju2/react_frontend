import React from 'react';

const Cart = (props) => {

    const { basket }= props;
    console.log('basket',basket)
    
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
                {props.cart && props.cart.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td className="disk"><img className="cartimage" src={item.image}/> <div><p>{item.detail}</p> <p className="text-link--accent " onClick={()=>props.remove(item)}>REMOVE</p></div> </td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.sum}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <p>Total:{" "}{basket.total}</p>
            <p>TotalCount:{" "}{basket.itemCount}</p>
        </div>
    );
};

export default Cart;