export default function Input({ ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className="w-[468px] h-[64px] pl-[25px] border border-slate-300 rounded-md"
      {...props}
    />
  );
}
