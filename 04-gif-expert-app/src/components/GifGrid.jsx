import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

export default GifGrid;
