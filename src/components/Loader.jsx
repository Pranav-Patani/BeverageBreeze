import { TbBottleFilled } from "react-icons/tb";

export const Loader = () => (
  <>
  <div className="section-loader">
  <div className="section-loader__loader">
      <TbBottleFilled className="section-loader__loader__icon" />
      <p className="section-loader__loader__text">Loading...</p>
    </div>
  </div>
   
  </>
);
