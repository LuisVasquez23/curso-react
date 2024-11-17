import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const images = await getGifs(category);
    setGifs(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: gifs,
    isLoading,
  };
};

export default useFetchGifs;
