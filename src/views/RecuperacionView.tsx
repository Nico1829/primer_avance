import Input from "@/components/recuperacion/Input";
import Button from "@/components/recuperacion/Button";
import Heading from "@/components/recuperacion/Heading";
import { useState } from "react";
import { useStore } from "@/store";
import ErrorDisplay from "@/components/checkout/ErrorDisplay";
import SuccessDisplay from "@/components/recuperacion/SuccessDisplay";

export default function RecuperacionView() {
  const users = useStore((state) => state.users);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userFinded = users.find((user) => user.email === email);
    if (!userFinded) {
      setSuccess("");
      setError("El usuario no existe");
    } else {
      setError("");
      setSuccess("Correo enviado correctamente");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-[678px]">
      <Heading text="Ingrese su correo para enviar contraseña" />
      <form className="flex flex-col gap-y-[16px]" onSubmit={sendEmail}>
        <Input
          required
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button />
        {error !== "" && <ErrorDisplay text={error} />}
        {success !== "" && <SuccessDisplay text={success} />}
      </form>
      <a className="underline mt-7" href="/login">
        Regresar a login
      </a>
    </div>
  );
}
