import { HeroeCard } from "./../components/";
import { useForm } from "./../../hooks/";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { useMemo } from "react";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = useMemo(
    () => queryString.parse(location.search),
    [location.search]
  );

  const heroes = useMemo(() => getHeroesByName(q), [q]);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q || "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length < 1) {
      return;
    }

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <h1>SearchPage</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input
                type="text"
                placeholder="Find your hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />

              <button className="btn btn-outline-primary mt-1">Search</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />
            <div
              className="alert alert-primary "
              style={{ display: q.length === 0 ? "" : "none" }}
            >
              Search a hero
            </div>
            <div
              className="alert alert-danger"
              style={{
                display: heroes.length == 0 && q.length > 0 ? "" : "none",
              }}
            >
              No hero with <b>{q}</b>
            </div>

            {heroes.map((hero) => (
              <HeroeCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
