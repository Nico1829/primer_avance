import { formatCurrency } from "@/helpers";
import { CartItem } from "@/types";

type ItemInOrderItemProps = {
  cartItem: CartItem;
};

export default function ItemInOrderItem({ cartItem }: ItemInOrderItemProps) {
  return (
    <div key={cartItem.id} className="flex gap-x-[13px]  text-2xl">
      <p className="flex-1">
        {cartItem.quantity} x {cartItem.titulo}
      </p>
      <span className="w-[146px]">
        {formatCurrency(cartItem.quantity * cartItem.precio)}
      </span>
    </div>
  );
}
