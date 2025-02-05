import { Link } from "react-router-dom";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroeImgUrl = `/assets/heroes/${id}.jpg`;

  const characterByHeroe = <p>{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={heroeImgUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {alter_ego !== characters && characterByHeroe}

              <p className="card-text">
                <small>{first_appearance}</small>
              </p>

              <Link to={`/heroe/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
