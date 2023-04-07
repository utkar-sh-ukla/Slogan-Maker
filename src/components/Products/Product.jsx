import "./product.css";
import { productData } from "../../data/productData";

export const Product = () => {
  return (
    <div className="product__conatiner">
      <div className="heading mb-48">Try our other free products</div>
      <div className="flex flex-wrap gap-32">
        {productData.map((product) => {
          return (
            <div key={product.id} className="product__card">
              <div className="mb-16">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product__card__heading mb-4">
                {product.name}
              </div>
              <div className="product__card__desc">{product.about}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
