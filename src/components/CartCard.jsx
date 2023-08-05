import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { useAuth } from "../contexts/AuthContext";
import {
  decreaseCartItemQty,
  increaseCartItemQty,
  removeItemFromCart,
} from "../services/cartServices";
import { addToWishlistFunc } from "../services/wishlistServices";
import {
  calcDiscount,
  isAlreadyPresentInWishlist,
} from "../utils/cartAndWishlistUtils";

export const CartCard = ({item}) => {
    const [disableMoveToWishlistBtn, setDisableMoveToWishlistBtn] =
    useState(false);
  const { _id, name, price, rating, originalPrice, volume, imgUrl, qty } = item;
  const {
    state: { wishlist },
    dispatch,
  } = useData();
  const { token } = useAuth();

  const moveToWishlistFromCart = () => {
    addToWishlistFunc(token, dispatch, item, setDisableMoveToWishlistBtn);
    removeItemFromCart(item._id, token, dispatch);
  };

  const isInWishlist = isAlreadyPresentInWishlist(_id, wishlist);

  return (
    <>
      <div className="cart-card">
        <div className="cart-card__img-container">
          <Link to={`/product/${_id}`}>
            <img
              src={imgUrl}
              alt="product"
              className="cart-card__img-container__img"
            />
          </Link>
        </div>
        <div className="cart-card__text-container">
          <h3 className="cart-card__text-container__name heading-tertiary">
            {name}
          </h3>
          <p className="cart-card__text-container__volume">{volume}</p>
          <p className="cart-card__text-container__rating">
            {rating}{" "}
            <span className="cart-card__text-container__rating__star">
              &#9733;
            </span>{" "}
          </p>
          <h2 className="cart-card__text-container__price heading-secondary">
            &#8377;{price}{" "}
            <span className="product-card__text-container__price__org">
              &#8377;{originalPrice}
            </span>{" "}
            <span className="product-card__text-container__price__disc">
              {calcDiscount(price, originalPrice)}%off
            </span>
          </h2>
          <div className="cart-card__text-container__btn-container">
            {isInWishlist ? (
              <Link to="/wishlist">
                <button className="cart-card__text-container__btn-container__btn  btn-tertiary">
                  Already in Wishlist
                </button>
              </Link>
            ) : (
              <button
                className="cart-card__text-container__btn-container__btn btn-tertiary"
                onClick={moveToWishlistFromCart}
                disabled={disableMoveToWishlistBtn}
              >
                Move to Wishlist
              </button>
            )}
            <button
              className="wishlist-card__text-container__btn-container__btn btn-tertiary"
              onClick={() => removeItemFromCart(item._id, token, dispatch)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
