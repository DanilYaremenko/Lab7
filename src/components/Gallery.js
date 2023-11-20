import React from "react";
import GoodsCard from "./GoodsCard.js";
import "./Gallery.css";

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://github.com/DanilYaremenko/Lab7/blob/gh-pages/images/apple.png?raw=true",
      price: "$1.99 per pound",
    },
    {
      id: 2,
      name: "Lime",
      image:
        "https://github.com/DanilYaremenko/Lab7/blob/gh-pages/images/lime.png?raw=true",
      price: "$0.50 each",
    },
    {
      id: 3,
      name: "Mango",
      image:
        "https://github.com/DanilYaremenko/Lab7/blob/gh-pages/images/mango.png?raw=true",
      price: "$2.99 each",
    },
    {
      id: 4,
      name: "Peach",
      image:
        "https://github.com/DanilYaremenko/Lab7/blob/gh-pages/images/peach.png?raw=true",
      price: "$2.49 per pound",
    },
    {
      id: 5,
      name: "Strawberry",
      image:
        "https://github.com/DanilYaremenko/Lab7/blob/gh-pages/images/strawberry.png?raw=true",
      price: "$3.99 per pound",
    },
    {
      id: 6,
      name: "Watermelon",
      image:
        "https://github.com/DanilYaremenko/Lab7/blob/gh-pages/images/watermelon.png?raw=true",
      price: "$0.39 per pound",
    },
  ];

  return (
    <div className="gallery">
      {products.map((product) => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Gallery;
