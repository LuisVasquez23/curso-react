import { HeroeList } from "../components/";

export const MarvelPage = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <h1>Marvel Comics</h1>
        <hr />
        <HeroeList publisher="Marvel Comics" />
      </div>
    </>
  );
};
