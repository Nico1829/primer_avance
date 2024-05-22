import { formatCurrency } from "@/helpers";
import { useStore } from "@/store";
import { Product } from "@/types"
import { useNavigate } from "react-router-dom";

type FilterProductItemProps = {
  product: Product;
}

export default function FilterProductItem({ product }: FilterProductItemProps) {
  const setSelectedProduct = useStore(state => state.setSelectedProduct);
  const navigate = useNavigate();

  function handleClick() {
    setSelectedProduct(product);
    navigate('/detalle');
  }

  return (
    <div onClick={handleClick} className="flex px-[22px] py-[29px] gap-x-[61px] shadow-md bg-white cursor-pointer">
      <img className="w-[143px] h-[121px] border flex justify-center items-center rounded-md" src={product.imagen} alt="iamgen del producto" />
      <div className="flex flex-col">
        <p className="font-bold">{product.titulo}</p>
        <span className="text-lg">por: {product.marca}</span>
        <span className="text-4xl font-bold">{formatCurrency(product.precio)}</span>
      </div>
    </div>
  )
}