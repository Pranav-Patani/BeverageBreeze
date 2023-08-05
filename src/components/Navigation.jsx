import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { useAuth } from "../contexts/AuthContext";
import { FaUser, FaHeart, FaCartShopping } from "react-icons/fa6";
import { TbBottleFilled } from "react-icons/tb";

export const Navigation = () => {
  const { token } = useAuth();
  const {
    state: { cart, wishlist },
    dispatch,
  } = useData();
  const navigate = useNavigate();
  const handlesearch = (event) => {
    event.target.length === 0
      ? dispatch({ type: "RESET" })
      : dispatch({ type: "SET_INPUT", payload: event.target.value });
    navigate("/products");
  };

  return (
    <>
      <div className="header">
        <nav className="header__logo-box">
          <NavLink className="header__logo-box-nav" to="/">
            <TbBottleFilled className="header__logo-box-nav-icon" />
            <p className="header__logo-box-nav-text">
              <span className="header__logo-box-nav-text--top">Beverage</span>
              <span className="header__logo-box-nav-text--bottom">Breeze</span>
            </p>
          </NavLink>
        </nav>
        <div className="header__search-bar-container">
          <input
            className="header__search-bar-container-bar"
            type="text"
            placeholder="Search for Beverages"
            onChange={handlesearch}
          />
          <span className="header__search-bar-container-bottom"></span>
        </div>

        <nav className="header__nav-container">
        <NavLink className="header__nav-container-item" to="/products">
            <h1 className="header__nav-container-item__products heading-primary">Beverages</h1>
          </NavLink>
          <NavLink className="header__nav-container-item" to="/profile">
            <FaUser />
          </NavLink>
          <NavLink className="header__nav-container-item" to="/wishlist">
            <FaHeart />
            {token && (
              <div className="header__nav-container-item__counter">{wishlist.length}</div>
            )}
          </NavLink>
          <NavLink className="header__nav-container-item" to="/cart">
            <FaCartShopping />
            {token && (
              <div className="header__nav-container-item__counter">{cart.length}</div>
            )}
          </NavLink>
        </nav>
      </div>
    </>
  );
};
