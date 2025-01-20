import { Route, Routes } from "react-router";
import { LoginPage } from "../auth/";
import { HeroesRoutes } from "../heroes/";
import { PrivateRoute } from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />

        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
