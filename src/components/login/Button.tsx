export default function Button({ ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className="px-7 py-1.5 w-[360px] h-[64px] text-white bg-slate-700 rounded-md"
      {...props}
    >
      Ingresar
    </button>
  );
}
