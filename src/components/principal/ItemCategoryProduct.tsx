import { useStore } from "@/store";
import { Product } from "@/types"
import { useNavigate } from "react-router-dom";

type ItemCategoryProductProps = {
  product: Product;
}

export default function ItemCategoryProduct({ product }: ItemCategoryProductProps) {
  const setSelectedProduct = useStore(state => state.setSelectedProduct);
  const navigate = useNavigate();

  function handleClick() {
    setSelectedProduct(product);
    navigate('/detalle');
  }

  return (
    <div className="w-[370px] flex flex-col gap-y-8">
      <img className="h-[370px] flex items-center justify-center rounded-xl border" src={product.imagen} alt="imagen del producto" />
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl">{product.titulo}</p>
        <span onClick={handleClick} className="text-sm cursor-pointer">Learn More</span>
      </div>
    </div>
  )
}