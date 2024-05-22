import { useStore } from "@/store";
import { Product } from "@/types"
import { useNavigate } from "react-router-dom";

type ItemProductProps = {
  product: Product;
}

export default function ItemProduct({ product }: ItemProductProps) {
  const setSelectedProduct = useStore(state => state.setSelectedProduct);
  const navigate = useNavigate();

  function handleClick() {
    setSelectedProduct(product);
    navigate('/detalle');
  }

  return (
    <div className="w-[185px] flex flex-col gap-y-6">
      <img className="h-[240px] flex items-center justify-center border rounded-lg" src={product.imagen} alt="imagen del producto" />
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl">{product.titulo}</p>
        <span onClick={handleClick} className="text-sm cursor-pointer">Learn More</span>
      </div>
    </div>
  )
}