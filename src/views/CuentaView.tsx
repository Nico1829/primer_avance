import { Pagination } from "@/components/Pagination";
import { formatCurrency } from "@/helpers";
import { useStore } from "@/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CuentaView() {
  const navigate = useNavigate();
  const currentUser = useStore((state) => state.currentUser);

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) {
      navigate("/login");
    }
  }, [currentUser]);

  const [page, setPage] = useState(1);
  const orderedItems = useStore((state) => state.orderedItems);
  const itemsPerPage = 4;

  return (
    <>
      <div className="flex pt-[48px] px-[40px] gap-x-[36px]">
        <div className=" w-[228px] bg-white ">
          <h2 className="mt-[10px] ml-[20px]"> Mi Cuenta</h2>
          <p className="mt-[20px] ml-[40px]">
            <a href="/cuenta">Ordenes Recientes</a>
          </p>
          <p className="mt-[20px] ml-[40px]">
            <a href="#">Datos de Registro</a>
          </p>
          <p className="mt-[20px] ml-[40px]">
            <a href="/changepassword">Cambiar Password</a>
          </p>
        </div>

        <div className="flex-1">
          <div className="bg-slate-300 h-[45px] rounded-md">
            <h1 className="pt-3 pl-2">Ordenes Recientes</h1>
          </div>

          {orderedItems
            .slice(
              page === 1 ? 0 : (page - 1) * itemsPerPage,
              page * itemsPerPage
            )
            .map((orderItem) => (
              <div
                key={orderItem.id}
                className="flex gap-x-[10px] bg-white h-[114px] justify-between px-[33px]"
              >
                <div className="mt-5">
                  <p>
                    Orden x {orderItem.itemsInOrder[0].quantity} items (
                    {orderItem.itemsInOrder[0].titulo})
                  </p>
                  <p>
                    Fecha: 12 de febrero de 2022 - Total:{" "}
                    {formatCurrency(orderItem.total)}
                  </p>
                  <p>
                    Enviado a: {orderItem.line1}, {orderItem.district},{" "}
                    {orderItem.city}, {orderItem.country}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="w-[153px] h-[23px]">
                    Orden Nro. {orderItem.id}
                  </p>
                  <a href="/orderdetail">Ver detalle</a>
                </div>
              </div>
            ))}
          <Pagination>
            <div className="flex gap-x-2">
              <button
                className="border bg-slate-300 rounded-md px-4 py-2 hover:bg-slate-200 disabled:cursor-not-allowed disabled:hover:bg-slate-300 disabled:opacity-25"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Anterior
              </button>
              <button
                className="border bg-slate-300 rounded-md px-4 py-2 hover:bg-slate-200 disabled:cursor-not-allowed disabled:hover:bg-slate-300 disabled:opacity-25"
                disabled={page * itemsPerPage >= orderedItems.length}
                onClick={() => setPage(page + 1)}
              >
                Siguiente
              </button>
            </div>
          </Pagination>
        </div>
      </div>
    </>
  );
}
