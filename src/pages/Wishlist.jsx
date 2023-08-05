import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { WishlistCard } from "../components/WishlistCard";

export const Wishlist = () => {
  const { state } = useData();
  const { wishlist } = state;
  return (
    <>
      <div className="section-wishlist">
        {wishlist.length === 0 ? (
          <div className="section-wishlist__empty">
            <h2 className="section-wishlist__empty__heading heading-secondary">
              Your wishlist is empty.{" "}
            </h2>
            <h3 className="section-wishlist__empty__sub-heading heading-tertiary">
              Get some beverages now!
            </h3>
            <Link to="/products">
              <button className="section-wishlist__empty__btn btn-primary">
                Explore Beverages
              </button>
            </Link>
          </div>
        ) : (
          <>
            <h2 className="section-wishlist__heading heading-secondary">
              Wishlist{" "}
              <span className="section-wishlist__heading__span">
                {wishlist?.length} items
              </span>
            </h2>
            <div className="section-wishlist__products">
              {wishlist?.map((item) => (
                <WishlistCard key={item._id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
