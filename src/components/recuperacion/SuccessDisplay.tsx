type SuccessDisplayProps = {
  text: string;
};

export default function SuccessDisplay({ text }: SuccessDisplayProps) {
  return (
    <p className="text-lime-500 text-center font-extrabold text-lg">{text}</p>
  );
}
