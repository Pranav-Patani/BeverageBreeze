import { useState, useEffect } from "react";
import { useData } from "../contexts/DataContext";
import { Filter } from "../components/Filter";
import { Loader } from "../components/Loader";
import { ProductList } from "../components/ProductCard";
import useMediaQuery from "../hooks/useMediaQuery";
import BottomSheet from "../components/BottomSheet";

export const Products = () => {
  const { state, setLoader } = useData();
  const [isLoading, setIsLoading] = useState(true);
  const isSmall = useMediaQuery("(max-width: 900px)");
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [setLoader]);

  useEffect(() => {
    !isSmall && setShowBottomSheet(false);
  }, [isSmall]);

  const priceSortData = state.priceFilter
    ? state.priceFilter === "lowToHigh"
      ? state.beverages?.sort((a, b) => a.price - b.price)
      : state.beverages?.sort((a, b) => b.price - a.price)
    : state.beverages;
  const categoryData = state.categoryFilter.length
    ? priceSortData.filter((item) =>
        state.categoryFilter.includes(item.categoryName)
      )
    : priceSortData;
  const ratingData = state.ratingFilter
    ? categoryData.filter((item) => item.rating >= state.ratingFilter)
    : categoryData;
  const searchData =
    state.searchFilter.length === 0
      ? ratingData
      : ratingData.filter((item) =>
          item.name.toLowerCase().includes(state.searchFilter.toLowerCase())
        );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="section-products">
            <div className="section-products__wrapper">
              <button
                onClick={() => setShowBottomSheet((curState) => !curState)}
                className="btn-secondary section-products__button"
              >
                {showBottomSheet ? "Close Filters" : "Filters"}
              </button>
              <div className="section-products__filter">
                {!isSmall && <Filter />}
              </div>
              <div className="section-products__products">
                {searchData?.map((item) => (
                  <ProductList key={item.id} item={item} />
                ))}
              </div>
              <BottomSheet show={showBottomSheet}>{<Filter />}</BottomSheet>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
