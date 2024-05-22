import Input from "@/components/loginerror/Input";
import Button from "@/components/loginerror/Button";

export default function LoginErrorView() {
  return (
    <div className="flex flex-col justify-center items-center h-[678px]">
      <p className="mb-[47px] mt-[16px]">Ingreso para clientes registrados</p>
      <div className="flex flex-col gap-[16px]">
        <Input placeholder="email" />
        <Input placeholder="password" />
        <p className="flex justify-center">*Email o password incorrectos</p>
      </div>
      <Button />
    </div>
  );
}
