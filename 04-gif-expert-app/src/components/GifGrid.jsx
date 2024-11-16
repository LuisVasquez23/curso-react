import { useState } from "react";

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

export default GifGrid;
