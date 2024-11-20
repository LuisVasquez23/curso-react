import PropTypes from "prop-types";

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

GifGridItem.prototype = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
