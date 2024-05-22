type HeadingProps = {
  text: string;
};

export default function Heading({ text }: HeadingProps) {
  return <h1 className="text-[32px]">{text}</h1>;
}
