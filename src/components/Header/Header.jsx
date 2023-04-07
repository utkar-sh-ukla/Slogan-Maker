import "./header.css";
import logo from "../../assets/icons/blue-logo.svg";

export const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="header__wrapper">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="header__items">
            <li>
              <button className="btn btn--link">Sign In</button>
            </li>
            <li>
              <button className="btn btn--ghost">Dukaan for PC</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
