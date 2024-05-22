import CartItem from "@/components/cart/CartItem";
import CheckOutButton from "@/components/cart/CheckOutButton";
import DisplayAmount from "@/components/cart/DisplayAmount";
import Heading from "@/components/cart/Heading";
import HeadingBar from "@/components/cart/HeadingBar";
import SavedItem from "@/components/cart/SavedItem";
import { useStore } from "@/store";
import { useMemo } from "react";

export default function CartView() {
  const cart = useStore((state) => state.cart);
  const savedItems = useStore((state) => state.savedItems);
  const total = useMemo(
    () =>
      cart.reduce(
        (total, cartItem) => total + cartItem.precio * cartItem.quantity,
        0
      ),
    [cart]
  );

  return (
    <div className="space-y-4 py-4 px-10">
      <Heading text="Items en tu Carrito de Compras" />
      {cart.length !== 0 ? (
        <>
          <HeadingBar text="Items Disponibles para Envío" />
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <DisplayAmount amount={total} />
          <CheckOutButton />
        </>
      ) : (
        <HeadingBar text="Carrito vacío" />
      )}
      {savedItems.length !== 0 && (
        <>
          <HeadingBar text="Guardado para después" />
          {savedItems.map((savedItem) => (
            <SavedItem key={savedItem.id} savedItem={savedItem} />
          ))}
        </>
      )}
    </div>
  );
}
