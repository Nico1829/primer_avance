import { formatCurrency } from "@/helpers";

type DisplayAmountProps = {
  amount: number;
};

export default function DisplayAmount({ amount }: DisplayAmountProps) {
  return (
    <div className="flex justify-end">
      <p className="mt-4 font-bold text-xl">Total: {formatCurrency(amount)}</p>
    </div>
  );
}
