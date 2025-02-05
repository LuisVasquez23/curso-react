import AppRouter from "./router/AppRouter";
import AuthProvider from "./auth/context/AuthProvider";

const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};

export default HeroesApp;
