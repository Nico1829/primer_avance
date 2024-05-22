export default function Button({ ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className="py-1.5 px-4 w-[468px] h-[64px] text-white bg-slate-700 rounded-md"
      {...props}
    >
      Crear Nueva Cuenta
    </button>
  );
}
