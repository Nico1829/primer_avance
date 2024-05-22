import Input from "@/components/nuevousuario/Input";
import Button from "@/components/nuevousuario/Button";
import Heading from "@/components/nuevousuario/Heading";
import { useState } from "react";
import { User } from "@/types";
import { useStore } from "@/store";
import ErrorDisplay from "@/components/checkout/ErrorDisplay";
import { useNavigate } from "react-router-dom";

export default function NuevoUsuarioView() {
  const users = useStore((state) => state.users);
  const addToUsers = useStore((state) => state.addToUsers);
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function createNewAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Las contraseñas no son iguales");
      return;
    }

    const newUser: User = {
      id: users.length + 1,
      email,
      firstName,
      lastName,
      password,
    };

    addToUsers(newUser);

    setCurrentUser(newUser);

    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center h-[678px]">
      <Heading text="Registra una nueva cuenta" />
      <form onSubmit={createNewAccount} className="flex flex-col gap-[16px]">
        <Input
          required
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          required
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          required
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          required
          type="password"
          placeholder="Corfirm Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        {error !== "" && <ErrorDisplay text={error} />}
        <Button type="submit" />
      </form>
    </div>
  );
}
