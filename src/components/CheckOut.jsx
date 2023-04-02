import React from 'react'


const Checkout = () => {
    const [shippingInfo, setShippingInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);
  
    function handleShippingInfoChange(event) {
      setShippingInfo({ ...shippingInfo, [event.target.name]: event.target.value });
    }
  
    function handlePaymentMethodChange(event) {
      setPaymentMethod(event.target.value);
    }
  
    function handleConfirmOrder() {
      
      if (Object.values(shippingInfo).some(value => value === '') || paymentMethod === '') {
        
        console.error('Please enter all required information');
        return;
      }
  
      
      setOrderConfirmed(true);
    }
  
    return (
      <div>
        {orderConfirmed ? (
          <div>
            <h2>Order Confirmed!</h2>
            <p>Your order has been successfully processed. Thank you!</p>
          </div>
        ) : (
          <div>
            <h2>Checkout</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" onChange={handleShippingInfoChange} required />
              </label>
              <label>
                Address:
                <input type="text" name="address" onChange={handleShippingInfoChange} required />
              </label>
              <label>
                City:
                <input type="text" name="city" onChange={handleShippingInfoChange}
         required />
          </label>
          <label>
            State:
            <input type="text" name="state" onChange={handleShippingInfoChange} required />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zip" onChange={handleShippingInfoChange} required />
          </label>
          <br />
          <label>
            Payment Method:
            <select name="paymentMethod" onChange={handlePaymentMethodChange} required>
              <option value="">Select a Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>
          <br />
          <button type="button" onClick={handleConfirmOrder}>Confirm Order</button>
        </form>
      </div>
    )}
  </div>
    );
  }

export default Checkout