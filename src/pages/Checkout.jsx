import React from "react";
import { useData } from "../contexts/DataContext";
import {
  getTotalAmount,
  priceAndDiscountCalcFunc,
} from "../utils/cartAndWishlistUtils";

export const Checkout = () => {

  const { state } = useData();
  const { cart } = state;
  const { price, discount } = priceAndDiscountCalcFunc(cart);

  const handlePopup = () => {
    
  };

  return (
    <>
      <div className="checkout__summary">
        <h3 className="checkout__summary__heading heading-secondary">
          Price Details{" "}
          <span className="checkout__summary__heading__span">
            ({cart.length} items)
          </span>{" "}
        </h3>
        <div className="checkout__summary__details">
          <div className="checkout__summary__details__container">
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--left">
              Price
            </span>
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--right">
              &#8377;{price}
            </span>
          </div>

          <div className="checkout__summary__details__container">
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--left">
              Delivery Charges
            </span>
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--right u-color-primary u-text-bold">
              Free
            </span>
          </div>

          <div className="checkout__summary__details__container">
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--left">
              Discount
            </span>
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--right">
              &#8377;{discount}
            </span>
          </div>

          <div className="checkout__summary__details__container">
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--left">
              Total Amount
            </span>
            <span className="checkout__summary__details__container__detail checkout__summary__details__container__detail__detail--right">
              &#8377;{getTotalAmount(price, discount)}
            </span>
          </div>

          <p className="checkout__summary__details__discount">
            Yay! You are saving &#8377;{discount} on this order!
          </p>
        </div>
        <div className="checkout__summary__btn-container">
          <button
            onClick={handlePopup}
            className="checkout__summary__btn-container__btn btn-tertiary"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
