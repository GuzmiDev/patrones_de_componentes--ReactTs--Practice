import { Product } from "../interfaces/interfaces";

const product1 = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "src/02-component-patterns/assets/coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffe Mug - Meme",
  img: "src/02-component-patterns/assets/coffee-mug2.png",
};

export const products: Product[] = [product1, product2];
