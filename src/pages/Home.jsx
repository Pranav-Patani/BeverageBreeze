import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { Loader } from "../components/Loader";
import { TbBottleFilled } from "react-icons/tb";
import BgImg from "../components/BgImg";

const LazyBgVideo = lazy(() => import("../components/BgVideo"));
export const Home = () => {
  const { state, dispatch, setLoader, loader } = useData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoader(true);
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories);
        setLoader(false);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, [setLoader]);

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handleCategoryWiseShop = (category) => {
    dispatch({
      type: "SET_CATEGORY_SHOP",
      payload: [...state.categoryFilter, category],
    });
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <div className="section-home">
            <div className="section-home__hero">
              <Suspense
                fallback={
                  <img
                    src={<BgImg />}
                    alt="background"
                    onLoad={() => console.log("Fallback image loaded")}
                    style={{ height: 100 + "vh", width: 100 + "vw" }}
                  />
                }
              >
                <LazyBgVideo />
              </Suspense>
              <div className="section-home__hero-content">
                <div className="section-home__hero-content-logo-box">
                  <TbBottleFilled className="section-home__hero-content-logo-box-icon" />
                  <h1 className="section-home__hero-content-logo-box-text section-home__hero-content-logo-box-text--top heading-primary">
                    BeverageBreeze
                  </h1>
                  <h2 className="section-home__hero-content-logo-box-text section-home__hero-content-logo-box-text--bottom heading-tertiary">
                    Refreshment delivered to your doorstep
                  </h2>
                </div>
                <div className="section-home__hero-content-btn-container">
                  <Link to="/products">
                    <button className="btn-primary">
                      Explore the flavours
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="section-home__categories u-center-text">
              <h1 className="heading-primary u-margin-top u-margin-bottom ">
                Categories
              </h1>
              <div className="section-home__categories-card-container">
                {categories.map(({ id, categoryName, description, imgUrl }) => (
                  <div
                    key={id}
                    className="section-home__categories-card-container__card"
                  >
                    <div className="section-home__categories-card-container__card__img-container">
                      <img
                        src={imgUrl}
                        alt="category"
                        className="section-home__categories-card-container__card__img-container__img"
                      />
                      <div className="section-home__categories-card-container__card__img-container__span"></div>
                    </div>
                    <div className="section-home__categories-card-container__card__text-container">
                      <h2 className="heading-secondary">{categoryName}</h2>
                      <p className="section-home__categories-card-container__card__text-container-para">
                        {description}
                      </p>
                      <Link
                        to="/products"
                        className="section-home__categories-card-container__card__text-container-btn-link"
                      >
                        <button
                          onClick={() => handleCategoryWiseShop(categoryName)}
                          className="section-home__categories-card-container__card__text-container-btn btn-secondary"
                        >
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
