import "./footer.css";
import logo from "../../assets/icons/gray-logo.svg";
import india from "../../assets/icons/india.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__wrapper mb-48">
          <div className="">
            <img src={logo} alt="dukaan logo" />
          </div>
          <ul className="footer__list">
            <li className="footer__list__item">Contact</li>
            <li className="footer__list__item">FAQ's</li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list__item">Tutorials</li>
            <li className="footer__list__item">Blog</li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list__item">Privacy</li>
            <li className="footer__list__item">Banned Items</li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list__item">About</li>
            <li className="footer__list__item ">
              Jobs
              <div className="btn__counter">3</div>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list__item">Facebook</li>
            <li className="footer__list__item">Twitter </li>
            <li className="footer__list__item">Linkedin</li>
          </ul>
        </div>
        
        <div className="footer__divider mb-24"></div>

        <div className="flex justify-between">
          <p className="footer__heading">Dukaan 2020, All rights reserved.</p>
          <p className="footer__heading flex items-center justify-center gap-8">
            Made in
            <img src={india} alt="indian flag" />
          </p>
        </div>
      </div>
    </>
  );
};
