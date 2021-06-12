import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt="advertisement"
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your amazon basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" button next to that item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your amazon basket</h2>
            {basket?.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <h2>Subtotal</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
