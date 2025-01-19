import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../ui";
import { DcPage, HeroePage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:heroeId" element={<HeroePage />} />

        {/* Search, Heroe by id */}

        <Route path="*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
