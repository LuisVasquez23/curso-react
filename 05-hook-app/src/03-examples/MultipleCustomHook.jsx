import { useCounter, useFetch } from "../hooks/";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

const MultipleCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const { id, name, sprites } = !!data && data;

  return (
    <>
      <h3>Información de Pokémon</h3>
      <hr />

      <div className="mb-2">
        {isLoading ? (
          <LoadingMessage />
        ) : (
          <PokemonCard
            id={id}
            name={name}
            sprites={[
              sprites.front_default,
              sprites.front_shiny,
              sprites.back_default,
              sprites.back_shiny,
            ]}
          />
        )}
      </div>

      <button
        className="btn btn-primary"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        Siguiente
      </button>
    </>
  );
};

export default MultipleCustomHook;
