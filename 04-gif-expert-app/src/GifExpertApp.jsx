import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const handleNewCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Componente AddCategory */}
      <AddCategory onNewCategory={handleNewCategory} />

      {/* Listado de Gifs */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif item */}
    </>
  );
};

export default GifExpertApp;
