import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order' name='place-order' id='placeOrder'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' id='firstName' name='firstName' required />
          <input type="text" placeholder='Last name' id='lastName' name='lastName' required />
        </div>
        <input type="email" placeholder='Email address' id='email' name='email' autoComplete='off' required />
        <input type="text" placeholder='Street' id='street' name='street' required />
        <div className="multi-fields">
          <input type="text" placeholder='City' id='city' name='city' required />
          <input type="text" placeholder='State' id='state' name='state' required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' id='zipCode' name='zipCode' required />
          <input type="text" placeholder='Country' id='country' name='country' autoComplete='Country' required />
        </div>
        <input type="text" placeholder='Phone' id='phone' name='phone' autoComplete='tel' required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
