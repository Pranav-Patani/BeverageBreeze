import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// import { SavedAddress } from "./components/SavedAddress";

import { toast } from "react-toastify";

export const Profile = () => {
  const navigate = useNavigate();

  const { setToken, user, setUser } = useAuth();

  const handleLogOut = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
    setUser(null);
    setToken(null);
    navigate("/");
    toast.success("Logged out successfully!");
  };

  return (
    <>
      <div className="section-profile">
        <div className="section-profile__wrapper">
          <div className="section-profile__profile-card">
            <div className="section-profile__profile-card__img-container">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
                alt="user"
                className="section-profile__profile-card__img-container__img"
              />
            </div>
            <div className="section-profile__profile-card__text">
              <p className="section-profile__profile-card__text__info">
                <span className="section-profile__profile-card__text__info__key">
                  Name:{" "}
                </span>
                <span className="section-profile__profile-card__text__info__value">
                  {user?.firstName} {user?.lastName}
                </span>
              </p>
              <p className="section-profile__profile-card__text__info">
                <span className="section-profile__profile-card__text__info__key">
                  Email:{" "}
                </span>
                <span className="section-profile__profile-card__text__info__value">
                  {user?.email}
                </span>
              </p>
              <button
                className="section-profile__profile-card__text__btn btn-tertiary"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
