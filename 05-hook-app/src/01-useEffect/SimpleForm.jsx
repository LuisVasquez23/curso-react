import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "123",
    email: "luis@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("formState changed");
  }, [formState]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="luis@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "123" && <Message />}
    </>
  );
};

export default SimpleForm;
