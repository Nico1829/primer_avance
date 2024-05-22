import { useState } from "react";
import { Pagination } from "@/components/Pagination";

export default function DetailUserView() {
  const orders = [
    {
      Id: 1,
      FechaOrden: "25/04/2023",
      Total: "S/100.00",
      Productos: "13",
      Estado: "Pendiente",
    },
    {
      Id: 2,
      FechaOrden: "25/04/2023",
      Total: "S/150.00",
      Productos: "1",
      Estado: "Por Enviar",
    },
    {
      Id: 3,
      FechaOrden: "25/04/2023",
      Total: "S/200.00",
      Productos: "4",
      Estado: "Entegado",
    },
  ];

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedOrders = orders.slice(startIndex, endIndex);

  const handleViewClick = () => {
    window.location.href = "http://localhost:3000/detailuser";
  };

  return (
    <>
      <div className="relative h-[678px]">
        <div className="absolute top-[34px] left-[40px] w-[228px] h-[587px] -lg shadow-md bg-white p-4">
          <h1 className="text-2xl font-Roboto h-[60px]">Admin</h1>
          <ul className="list-none">
            <li className="ml-4 h-[60px]">
              <a href="/">
                <b>Dashboard</b>
              </a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">
                <b>Usuarios registrados</b>
              </a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">
                <b>Productos</b>
              </a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">
                <b>Ordenes</b>
              </a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">
                <b>Productos más vendidos</b>
              </a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">
                <b>Series</b>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute top-[98px] left-[340px] w-[1500px] h-[45px] -lg shadow-md bg-[#D9D9D9] p-3">
        <h1>
          <b>Detalle de usuarios registrados</b>
        </h1>
      </div>

      <div className="absolute top-[145px] left-[340px] w-[1500px] h-[85px] -lg shadow-md bg-white p-3">
        <table className="w-full h-full">
          <tbody>
            <tr>
              <td className="p-2">
                ID: 12313 <span className="ml-16"></span>
                Nombre: Julio Pedro <span className="ml-16"></span>
                Correo: juliocorreo@gmail.com <span className="ml-16"></span>
                Fecha de registro: 25/04/2024
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="absolute top-[230px] left-[340px] w-[1500px] h-[45px] -lg shadow-md bg-[#D9D9D9] p-3">
        <h1>
          <b>Ordenes recientes (Maximo 10)</b>
        </h1>
      </div>

      <table
        id="tabla1"
        className="absolute top-[275px] left-[340px] w-[1500px] h-[200px] -lg shadow-md bg-white p-3 table-fixed"
      >
        <thead>
          <tr className="ml-3 h-[55px]">
            <th className="px-4 w-[100px] text-left">ID</th>
            <th className="px-4 w-[200px] text-left">Fecha orden</th>
            <th className="px-4 w-[200px] text-left">Total</th>
            <th className="px-4 w-[250px] text-left">Productos</th>
            <th className="px-4 w-[150px] text-left">Estado</th>
            <th className="px-4 w-[200px] text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order) => (
            <tr key={order.Id}>
              <td className="px-4 w-[100px] text-left">{order.Id}</td>
              <td className="px-4 w-[200px] text-left">{order.FechaOrden}</td>
              <td className="px-4 w-[200px] text-left">{order.Total}</td>
              <td className="px-4 w-[250px] text-left">{order.Productos}</td>
              <td className="px-4 w-[150px] text-left">{order.Estado}</td>
              <td className="px-4 w-[200px] text-center">
                <button
                  onClick={handleViewClick}
                  className="p-1 text-black rounded underline"
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination>
        <div className="flex gap-x-2">
          <button className="border bg-slate-300 rounded-md px-4 py-2 hover:bg-slate-200 disabled:cursor-not-allowed disabled:hover:bg-slate-300 disabled:opacity-25">
            Anterior
          </button>
          <button className="border bg-slate-300 rounded-md px-4 py-2 hover:bg-slate-200">
            Siguiente
          </button>
        </div>
      </Pagination>
    </>
  );
}
