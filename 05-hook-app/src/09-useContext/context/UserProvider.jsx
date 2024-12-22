import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "luis",
  email: "luis@gmail.com",
};

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
