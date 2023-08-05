import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import {
  isAlreadyPresentInCart,
  isAlreadyPresentInWishlist,
} from "../utils/cartAndWishlistUtils";
import { useAuth } from "../contexts/AuthContext";
import { addToCartFunc } from "../services/cartServices";
import { addToWishlistFunc } from "../services/wishlistServices";
import { useNavigate } from "react-router-dom";


export const ProductDetail = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { productId } = useParams();
  const {
    state: { beverages, cart, wishlist },
    dispatch,
  } = useData();
  const productFind = beverages.find(({ _id }) => _id === productId);
 
  const { _id, name, brand, price, categoryName, rating, imgUrl } = productFind;

  const isInCart = isAlreadyPresentInCart(_id, cart);
  const isInWishlist = isAlreadyPresentInWishlist(_id, wishlist);

  const addtoCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCartFunc(token, dispatch, productFind)
      : navigate("/login");
  };

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlistFunc(token, dispatch, productFind)
      : navigate("/login");
  };

  return (
    <>
    
      <div className="product-detail">
        <div className="product-detail__img-container">
          <img
            src={imgUrl}
            alt="product"
            className="product-detail__img-container__img"
          />
        </div>
        <div className="product-detail__text-container">
          <h3 className="product-detail__text-container__name heading-tertiary">
            {name}
          </h3>
          <h2 className="product-detail__text-container__price heading-secondary">
            &#8377;{price}
          </h2>

          <div className="product-detail__text-container__table">
            <div className="product-detail__text-container__table--left">
              <p className="product-detail__text-container__table--left__text">
                Brand
              </p>
              <p className="product-detail__text-container__table--left__text">
                Rating
              </p>
              <p className="product-detail__text-container__table--left__text">
                Category
              </p>
            </div>
            <div className="product-detail__text-container__table--right">
              <p className="product-detail__text-container__table--right__text">
                {brand}
              </p>
              <p className="product-detail__text-container__table--right__text">
                {rating}&#9733;
              </p>
              <p className="product-detail__text-container__table--right__text">
                {categoryName}
              </p>
            </div>
          </div>

          <div className="product-detail__text-container__details">
            <h3 className="product-detail__text-container__details__heading heading-tertiary">
              Details
            </h3>
            <p className="product-detail__text-container__details__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              asperiores voluptatum, ea quos laudantium minima ducimus ut
              impedit quisquam accusantium error commodi quibusdam corporis
              temporibus id corrupti eos doloribus voluptate.
            </p>
          </div>
          <div className="product-detail__text-container__btn-container">
            <button
              onClick={addtoCartHandler}
              className="product-detail__text-container__btn-container__btn btn-tertiary"
            >
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>

            <button
              onClick={addToWishlistHandler}
              className="product-detail__text-container__btn-container__btn btn-tertiary"
            >
              {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
 
    </>
  );
};
