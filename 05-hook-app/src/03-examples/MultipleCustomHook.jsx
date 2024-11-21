import { useFetch } from "../hooks/";

const MultipleCustomHook = () => {
  const { data, isLoading, hasError, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  return (
    <>
      <h3>Información de Pokémon</h3>
      <hr />

      {isLoading && <p>Cargando...</p>}
      <pre>{data?.name}</pre>
    </>
  );
};

export default MultipleCustomHook;
