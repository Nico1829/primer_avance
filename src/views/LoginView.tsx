import Input from "@/components/login/Input";
import Button from "@/components/login/Button";
import { useState } from "react";
import Heading from "@/components/login/Heading";
import { useStore } from "@/store";
import ErrorDisplay from "@/components/checkout/ErrorDisplay";
import { useNavigate } from "react-router-dom";

export default function LoginView() {
  const users = useStore((state) => state.users);

  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userFinded = users.find((user) => user.email === email);
    if (!userFinded) {
      setError("*Email o password incorrectos");
      return;
    }
    if (userFinded.password !== password) {
      setError("*Email o password incorrectos");
      return;
    }

    setCurrentUser(userFinded);

    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center h-[678px]">
      <Heading text="Ingreso para clientes registrados" />
      <form className="flex flex-col gap-[16px]" onSubmit={login}>
        <Input
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" />
        {error !== "" && <ErrorDisplay text={error} />}
      </form>
      <a className="mt-5 underline" href="/recuperacion">
        Olvide mi password
      </a>
      <a className="mt-6 underline" href="/nuevousuario">
        No tengo cuenta, deseo registrarme
      </a>
    </div>
  );
}
