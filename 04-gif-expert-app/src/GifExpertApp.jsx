import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAdd = () => {
    setCategories([...categories, "HunterXHunter"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory />

      {/* Listado de Gifs */}
      <button onClick={handleAdd}>Agregar</button>
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
