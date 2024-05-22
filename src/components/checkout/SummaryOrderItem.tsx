import { formatCurrency } from "@/helpers";

type SummaryOrderItemProps = {
  amount: number;
  title: string;
};

export default function SummaryOrderItem({
  title,
  amount,
}: SummaryOrderItemProps) {
  return (
    <div className="flex gap-x-[89px]">
      <p className="w-[146px]">{title}:</p>
      <span className="w-[146px]">{formatCurrency(amount)}</span>
    </div>
  );
}
