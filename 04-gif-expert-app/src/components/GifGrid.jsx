import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-grid">
          {images.map(({ id, url, title }) => (
            <GifGridItem key={id} url={url} title={title} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
