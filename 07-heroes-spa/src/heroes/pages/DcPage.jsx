import { HeroeList } from "../components/";

export const DcPage = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <h1>DC Comics</h1>
        <hr />
        <HeroeList publisher="DC Comics" />
      </div>
    </>
  );
};
