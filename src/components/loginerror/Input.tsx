type InputProps = {
  placeholder: string;
};

export default function Input({ placeholder }: InputProps) {
    return (
      <input
        className="w-[360px] h-[64px] pl-[25px] border border-black rounded-md"
        type="text"
        placeholder={placeholder}
      />
    );
  }
  