type HeadingProps = {
  text: string;
};

export default function Heading({ text }: HeadingProps) {
  return <h1 className="mb-[47px] mt-[16px] text-lg">{text}</h1>;
}
