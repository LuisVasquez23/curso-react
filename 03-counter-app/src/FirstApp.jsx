import PropTypes from 'prop-types';

const FirstApp = ({title , subtitle}) => {

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </>
  )

}

// PropTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default FirstApp
