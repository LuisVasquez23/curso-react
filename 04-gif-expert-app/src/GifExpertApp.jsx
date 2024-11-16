import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAdd = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Componente AddCategory */}
      <AddCategory setCategories={handleAdd} />

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
