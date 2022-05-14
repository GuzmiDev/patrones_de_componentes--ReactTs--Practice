import { ProductCard } from "../components/";
import { products } from "../data/products";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart?.[product.id]?.count || 0}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className=" text-bold" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>

      <div className="shopping-cart">
        {Object.values({ ...shoppingCart }).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            style={{ width: "100px" }}
            value={product.count}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
