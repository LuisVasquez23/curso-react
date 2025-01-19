import { useNavigate, useParams } from "react-router";
import { getHeroeById } from "../helpers";
import { useMemo } from "react";

export const HeroePage = () => {
  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);
  const navigate = useNavigate();

  if (!heroe) {
    return <h1>Heroe not found</h1>;
  }

  const onReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container animate__animated animate__fadeInLeft">
        <div className="row mt-5 ">
          <div className="col-4">
            <img
              src={`../assets/heroes/${heroe.id}.jpg`}
              alt={heroe.superhero}
              className="img-thumbnail "
            />
          </div>
          <div className="col-8">
            <h3>{heroe.superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Alter ego:</b> {heroe.alter_ego}
              </li>
              <li className="list-group-item">
                <b>Publisher:</b> {heroe.publisher}
              </li>
              <li className="list-group-item">
                <b>First appearance:</b> {heroe.first_appearance}
              </li>
              <h5>Characters</h5>
              <p>{heroe.characters}</p>

              <button
                onClick={() => onReturn()}
                className="btn btn-outline-primary"
              >
                Regresar
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
