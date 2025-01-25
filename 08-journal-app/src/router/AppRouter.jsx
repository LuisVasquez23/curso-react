import { Route, Routes } from "react-router";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalPage } from "../journal/pages/JournalPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login and register */}
      <Route path="auth/*" element={<AuthRoutes />} />

      {/* JournalApp */}
      <Route path="/*" element={<JournalPage />} />
    </Routes>
  );
};
