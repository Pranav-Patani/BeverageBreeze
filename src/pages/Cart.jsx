import React from "react";
import { useData } from "../contexts/DataContext";
import { CartCard } from "../components/CartCard";
import { Link, useNavigate } from "react-router-dom";
import {
  getTotalAmount,
  priceAndDiscountCalcFunc,
} from "../utils/cartAndWishlistUtils";

export const Cart = () => {
  const navigate = useNavigate();
  const { state } = useData();
  const { cart } = state;
  const { price, discount } = priceAndDiscountCalcFunc(cart);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="section-cart">
        <div className="section-cart__wrapper">
          {cart.length === 0 ? (
            <div className="section-cart__empty">
              <h2 className="section-cart__empty__heading heading-secondary">
                Your cart is empty.{" "}
              </h2>
              <h3 className="section-cart__empty__sub-heading heading-tertiary">
                Get some beverages now!
              </h3>
              <Link to="/products">
                <button className="section-cart__empty__btn btn-primary">
                  Explore Beverages
                </button>
              </Link>
            </div>
          ) : (
            <>
              <h2 className="section-cart__heading heading-secondary">
                cart{" "}
                <span className="section-cart__heading__span">
                  {cart?.length} items
                </span>
              </h2>
              <div className="section-cart__prod-and-sum-container">
                <div className="section-cart__products">
                  {cart?.map((item) => (
                    <CartCard key={item._id} item={item} />
                  ))}
                </div>

                <div className="section-cart__summary">
                  <h3 className="section-cart__summary__heading heading-secondary">
                    Price Details{" "}
                    <span className="section-cart__summary__heading__span">
                      ({cart.length} items)
                    </span>{" "}
                  </h3>
                  <div className="section-cart__summary__details">
                    <div className="section-cart__summary__details__container">
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--left">
                        Price
                      </span>
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--right">
                        &#8377;{price}
                      </span>
                    </div>

                    <div className="section-cart__summary__details__container">
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--left">
                        Delivery Charges
                      </span>
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--right u-color-primary u-text-bold">
                        Free
                      </span>
                    </div>

                    <div className="section-cart__summary__details__container">
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--left">
                        Discount
                      </span>
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--right">
                        &#8377;{discount}
                      </span>
                    </div>

                    <div className="section-cart__summary__details__container">
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--left">
                        Total Amount
                      </span>
                      <span className="section-cart__summary__details__container__detail section-cart__summary__details__container__detail__detail--right">
                        &#8377;{getTotalAmount(price, discount)}
                      </span>
                    </div>

                    <p className="section-cart__summary__details__discount">
                      Yay! You are saving &#8377;{discount} on this order!
                    </p>
                  </div>
                  <div className="section-cart__summary__btn-container">
                    <button
                      onClick={handleCheckout}
                      className="section-cart__summary__btn-container__btn btn-tertiary"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
