import { useState } from "react";
import "./slogan.css";

const Slogan = ({ slogan }) => {
  const [caption, setCaption] = useState("Click to copy");
  const [mouseOnslogan, setMouseOnslogan] = useState(false);
  const mouseOver = () => {
    setMouseOnslogan(true);
  };

  const mouseOut = () => {
    setMouseOnslogan(false);
    setCaption("Click to copy");
  };

  const onClickHandler = (slogan) => {
    navigator.clipboard.writeText(slogan);
    setCaption("Copied!");
  };
  return (
    <div
      className="slogan__wrapper"
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOut}
      onClick={() => onClickHandler(slogan.slogan)}
    >
      <p className="slogan">{slogan.slogan}</p>
      {mouseOnslogan && (
        <div className="caption">
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
};

export const Slogans = ({ slogan }) => {
  return (
    <div className="slogan__container mb-48">
      {slogan.map((slogan, i) => (
        <Slogan slogan={slogan} key={i} />
      ))}
    </div>
  );
};
