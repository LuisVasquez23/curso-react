import useFetch from "../hooks/useFetch";

const MultipleCustomHook = () => {
  useFetch();

  return (
    <>
      <h1>MultipleCustomHook</h1>
    </>
  );
};

export default MultipleCustomHook;
