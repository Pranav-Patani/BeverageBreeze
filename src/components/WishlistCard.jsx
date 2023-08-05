import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import { removeItemFromWishlist } from "../services/wishlistServices";
import { addToCartFunc, increaseCartItemQty } from "..//services/cartServices";
import {
  isAlreadyPresentInCart,
  calcDiscount,
} from "../utils/cartAndWishlistUtils";

export const WishlistCard = ({ item }) => {
  const [disableMoveToCartBtn, setDisableMoveToCartBtn] = useState(false);
  const { _id, name, price,  originalPrice, volume, rating, imgUrl } = item;
  const { token } = useAuth();
  const {
    state: { cart },
    dispatch,
  } = useData();

  const moveToCartFromWishlist = () => {
    if (isAlreadyPresentInCart(_id, cart)) {
      increaseCartItemQty(item._id, token, dispatch);
      removeItemFromWishlist(item._id, token, dispatch);
    } else {
      removeItemFromWishlist(item._id, token, dispatch);
      addToCartFunc(token, dispatch, item, setDisableMoveToCartBtn);
    }
  };

  const isInCart = isAlreadyPresentInCart(_id, cart);
  return (
    <>
      <div className="wishlist-card">
        <div className="wishlist-card__img-container">
          <Link to={`/product/${_id}`}>
            <img
              src={imgUrl}
              alt="product"
              className="wishlist-card__img-container__img"
            />
          </Link>
        </div>
        <div className="wishlist-card__text-container">
          <h3 className="wishlist-card__text-container__name heading-tertiary">
            {name}
          </h3>
          <p className="wishlist-card__text-container__volume">{volume}</p>
          <p className="wishlist-card__text-container__rating">
            {rating}{" "}
            <span className="wishlist-card__text-container__rating__star">
              &#9733;
            </span>{" "}
          </p>
          <h2 className="wishlist-card__text-container__price heading-secondary">
            &#8377;{price} <span className="product-card__text-container__price__org">&#8377;{originalPrice}</span> <span className="product-card__text-container__price__disc">{calcDiscount(price, originalPrice)}%off</span>
          </h2>
          <div className="wishlist-card__text-container__btn-container">
            {isInCart ? (
              <Link to="/cart" className="move_to_btn">
                <button className="wishlist-card__text-container__btn-container__btn btn-tertiary">
                  Already in Cart
                </button>
              </Link>
            ) : (
              <button
                className="wishlist-card__text-container__btn-container__btn btn-tertiary"
                onClick={moveToCartFromWishlist}
                disabled={disableMoveToCartBtn}
              >
                Move to Cart
              </button>
            )}
            <button
              className="wishlist-card__text-container__btn-container__btn btn-tertiary"
              onClick={() => removeItemFromWishlist(item._id, token, dispatch)}
            >
              Remove from wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
