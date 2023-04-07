import "./feature.css";
import { featureData } from "../../data/featureData";

export const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="feature__container">
          {featureData.map((feature) => {
            return (
              <div key={feature.id} className="feature__wrapper">
                <div className="feature__icon">
                  <img src={feature.logo} alt={feature.name} />
                </div>
                <h5 className="feature__heading">{feature.name}</h5>
                <p className="feature__subheading">{feature.about}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
