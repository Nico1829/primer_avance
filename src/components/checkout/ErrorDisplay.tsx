type ErrorDisplayProps = {
  text: string;
};

export default function ErrorDisplay({ text }: ErrorDisplayProps) {
  return <p className="text-red-500 text-center font-extrabold text-lg">{text}</p>;
}
