import { useState, useEffect } from "react";
import { useData } from "../contexts/DataContext";
import { Filter } from "../components/Filter";
import { Loader } from "../components/Loader";
import { ProductList } from "../components/ProductCard";

export const Products = () => {
  const { state, setLoader } = useData();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [setLoader]);

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
              <div className="section-products__filter">
                <Filter />
              </div>
              <div className="section-products__products">
                {searchData?.map((item) => (
                  <ProductList key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
