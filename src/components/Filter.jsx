import React from "react";
import { useState, useEffect } from "react";
import { useData } from "../contexts/DataContext";

export const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [sliderStyle, setSliderStyle] = useState({
    backgroundImage: `linear-gradient(to right, #14b8a6 10%, #f0fdfa 10%)`,
  });
  const [ratingValue, setRatingValue] = useState(1);

  const { state, dispatch } = useData();
  const handlePriceSort = (event) => {
    dispatch({ type: "PRICE_SORT", payload: event.target.value });
  };
  const handleCategory = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    console.log(value);
    if (isChecked) {
      dispatch({
        type: "SET_CATEGORY",
        payload: [...state.categoryFilter, value],
      });
    } else {
      const updated = state.categoryFilter?.filter((item) => item !== value);
      dispatch({ type: "SET_CATEGORY", payload: updated });
    }
  };
  const handleRating = (event) => {
    dispatch({ type: "SET_RATING", payload: event.target.value });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
    setSliderStyle({
      backgroundImage: `linear-gradient(to right, #14b8a6 10%, #f0fdfa 10%)`,
    });
    setRatingValue(1);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  const handleSliderProgress = (e) => {
    const value = Number(e.target.value);
    setRatingValue(value);
    setSliderStyle({
      backgroundImage: `linear-gradient(to right, #14b8a6 ${
        value * 2
      }0%, #f0fdfa ${value * 2}0%)`,
    });
  };

  return (
    <>
      <div className="filter">
        <h2 className="filter__heading heading-secondary">Filters</h2>

        <div className="filter__category">
          <h3 className="filter__all-headings filter__category__heading heading-tertiary">
            Categories
          </h3>
          {categories.map(({ _id, categoryName }) => (
            <div key={_id} className="filter__category__checkbox-container">
              <input
                type="checkbox"
                className="filter__category__checkbox-container__checkbox"
                id={_id}
                value={categoryName}
                name={categoryName}
                checked={state.categoryFilter?.includes(categoryName)}
                onChange={handleCategory}
              />
              <label
                className="filter__category__checkbox-container__label"
                htmlFor={_id}
              >
                {categoryName}
              </label>
            </div>
          ))}
        </div>

        <div className="filter__price">
          <h3 className="filter__all-headings filter__price__heading heading-tertiary">
            Sort by Price
          </h3>
          <div className="filter__price__radio-container">
            <input
              type="radio"
              className="filter__price__radio-container__radio"
              id="low-to-high"
              name="price-sort"
              value="lowToHigh"
              checked={state.priceFilter === "lowToHigh"}
              onChange={handlePriceSort}
            />
            <label
              htmlFor="low-to-high"
              className="filter__price__radio-container__label"
            >
              Low to High
            </label>
          </div>
          <div className="filter__price__radio-container">
            <input
              type="radio"
              className="filter__price__radio-container__radio"
              id="high-to-low"
              name="price-sort"
              value="highToLow"
              checked={state.priceFilter === "highToLow"}
              onChange={handlePriceSort}
            />
            <label
              htmlFor="high-to-low"
              className="filter__price__radio-container__label"
            >
              High to Low
            </label>
          </div>
        </div>
        <div className="filter__rating">
          <h3 className="filter__all-headings filter__rating__heading heading-tertiary">
            Ratings
          </h3>
          <div className="filter__rating__slider-container">
            <input
              type="range"
              className="filter__rating__slider-container__slider"
              onInput={(e) => handleSliderProgress(e)}
              id="slider-ratings"
              name="slider-ratings"
              min="1"
              max="5"
              style={sliderStyle}
              value={state.ratingFilter}
              onChange={handleRating}
            />
            <label
              htmlFor="slider-rating"
              className="filter__rating__slider-container__label"
            >
              {ratingValue} &#9733; & above
            </label>
          </div>
        </div>
        <div className="filter__reset">
          <button
            onClick={handleReset}
            className="filter__reset__btn btn-tertiary"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};
