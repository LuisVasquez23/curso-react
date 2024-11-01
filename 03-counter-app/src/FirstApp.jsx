import PropTypes from "prop-types";

const FirstApp = ({ title = "Default titlte", subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

// PropTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

// Default Props
// FirstApp.defaultProps = {
//   title: "Default title",
//   subtitle: "Default subtitle",
// };

export default FirstApp;
