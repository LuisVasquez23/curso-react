import { Navigate, Route, Routes } from "react-router";
import { DcPage, MarvelPage } from "../heroes/pages/";
import LoginPage from "../auth/pages/LoginPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
