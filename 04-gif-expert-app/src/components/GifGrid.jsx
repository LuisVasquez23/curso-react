import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const getImages = async () => {
    const images = await getGifs(category);
    setGifs(images);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {gifs.map(({ id, url, title }) => (
          <GifGridItem key={id} url={url} title={title} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
