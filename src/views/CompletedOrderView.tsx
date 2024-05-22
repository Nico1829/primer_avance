import ItemProduct from "@/components/principal/ItemProduct";
import { useStore } from "@/store";

export default function CompletedOrderView() {
  const products = useStore((state) => state.products);

  return (
    <div className="flex p-[65px] flex-col">
      <h1 className="text-center text-[32px] mb-[65px]">
        ¡Muchas gracias por tu pedido!
      </h1>
      <p className="text-center text-[24px] mb-[65px]">
        Puedes ver el detalle y estado de tu pedido ingresando a{" "}
        <a className="underline" href="/cuenta">
          tu cuenta.
        </a>
      </p>
      <h2 className="text-[32px] mb-[25px]">También de podría interesar...</h2>
      <div className="flex justify-between mb-7">
        {products.slice(0, 5).map((product) => (
          <ItemProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
