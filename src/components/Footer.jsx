import { TbBottleFilled } from "react-icons/tb";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
export const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__logo-box">
        <TbBottleFilled className="footer__logo-box__icon" />
        <h1 className="footer__logo-box__text heading-primary">
          BeverageBreeze
        </h1>
      </div>
      <div className="footer__social-links">
        <a
          href="https://www.linkedin.com/in/pranavpatani"
          target="_blank"
          className="footer__social-links__link"
        >
          <FaLinkedinIn className="footer__social-links__link__icon" />
        </a>
        <a
          href="https://github.com/Pranav-Patani"
          target="_blank"
          className="footer__social-links__link"
        >
          <FaGithub className="footer__social-links__link__icon" />
        </a>
        <a
          href="https://twitter.com/Prnv_Ptn"
          target="_blank"
          className="footer__social-links__link"
        >
          <FaTwitter className="footer__social-links__link__icon" />
        </a>
      </div>
      <p className="footer__bottom-text">
        No copyrights. Feel free to use the designs or the concept!
      </p>
    </div>
  </>
);
