import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <>
      <h2>Login page</h2>
      <hr />
      <h3>Current user: </h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default LoginPage;
