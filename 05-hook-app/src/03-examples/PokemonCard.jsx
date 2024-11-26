import { useLayoutEffect, useRef } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const titleRef = useRef();

  useLayoutEffect(() => {
    console.log(titleRef.current.getBoundingClientRect());
  }, [id]);

  return (
    <section style={{ height: 200 }}>
      <h2 ref={titleRef} className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Imágenes */}
      {sprites.map((sprite) => (
        <img key={sprite} src={sprite} alt={name} />
      ))}
    </section>
  );
};
