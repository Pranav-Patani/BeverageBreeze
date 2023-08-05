import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useData } from "../contexts/DataContext";
import {
  calcDiscount,
  isAlreadyPresentInCart,
  isAlreadyPresentInWishlist,
} from "../utils/cartAndWishlistUtils";
import { useAuth } from "../contexts/AuthContext";
import { addToCartFunc } from "../services/cartServices";
import { addToWishlistFunc } from "../services/wishlistServices";

export const ProductList = ({ item }) => {
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const { _id, name, price, originalPrice, volume, rating, imgUrl } = item;
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const { cart, wishlist } = state;
  const navigate = useNavigate();

  const isInCart = isAlreadyPresentInCart(_id, cart);
  const isInWishlist = isAlreadyPresentInWishlist(_id, wishlist);

  const addtoCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCartFunc(token, dispatch, item, setCartBtnDisabled)
      : navigate("/login");
  };

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlistFunc(token, dispatch, item, setWishlistBtnDisabled)
      : navigate("/login");
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card__img-container">
          <Link to={`/product/${_id}`}>
            <img
              src={imgUrl}
              alt="product"
              className="product-card__img-container__img"
            />
          </Link>
        </div>
        <div className="product-card__text-container">
          <h3 className="product-card__text-container__name heading-tertiary">
            {name}
          </h3>
          <p className="product-card__text-container__volume">{volume}</p>
          <p className="product-card__text-container__rating">
            {rating}{" "}
            <span className="product-card__text-container__rating__star">
              &#9733;
            </span>{" "}
          </p>
          <h2 className="product-card__text-container__price heading-secondary">
          &#8377;{price} <span className="product-card__text-container__price__org">&#8377;{originalPrice}</span> <span className="product-card__text-container__price__disc">{calcDiscount(price, originalPrice)}%off</span>
          </h2>
          <div className="product-card__text-container__btn-container">
            <button
              onClick={addtoCartHandler}
              disabled={cartBtnDisabled}
              className="product-card__text-container__btn-container__btn btn-tertiary"
            >
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>
            <button
              onClick={addToWishlistHandler}
              disabled={wishlistBtnDisabled}
              className="product-card__text-container__btn-container__btn btn-tertiary"
            >
              {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
