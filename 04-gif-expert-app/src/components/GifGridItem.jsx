const GifGridItem = ({ url, title }) => {
  return (
    <>
      <div className="card">
        <p>{title}</p>
        <img src={url} alt={title} />
      </div>
    </>
  );
};

export default GifGridItem;
