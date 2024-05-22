import { useState } from "react";

export default function LProductosView() {
  const data = [
    {
      Id: 1,
      Detalle: "Producto A",
      Serie: "A123",
      Precio: "$320",
      FechaRegistro: "2023-04-25",
      Stock: 50,
      Estado: "Activo",
    },
    {
      Id: 2,
      Detalle: "Producto B",
      Serie: "B456",
      Precio: "$170",
      FechaRegistro: "2023-07-25",
      Stock: 30,
      Estado: "Activo",
    },
    {
      Id: 3,
      Detalle: "Producto C",
      Serie: "C789",
      Precio: "$86",
      FechaRegistro: "2023-01-12",
      Stock: 20,
      Estado: "Activo",
    },
    {
      Id: 4,
      Detalle: "Producto D",
      Serie: "D101",
      Precio: "$200",
      FechaRegistro: "2023-05-19",
      Stock: 15,
      Estado: "Activo",
    },
    {
      Id: 5,
      Detalle: "Producto E",
      Serie: "E112",
      Precio: "$450",
      FechaRegistro: "2023-06-22",
      Stock: 10,
      Estado: "Activo",
    },
    {
      Id: 6,
      Detalle: "Producto A",
      Serie: "A123",
      Precio: "$320",
      FechaRegistro: "2023-04-25",
      Stock: 50,
      Estado: "Activo",
    },
    {
      Id: 7,
      Detalle: "Producto B",
      Serie: "B456",
      Precio: "$170",
      FechaRegistro: "2023-07-25",
      Stock: 30,
      Estado: "Activo",
    },
    {
      Id: 8,
      Detalle: "Producto C",
      Serie: "C789",
      Precio: "$86",
      FechaRegistro: "2023-01-12",
      Stock: 20,
      Estado: "Activo",
    },
    {
      Id: 9,
      Detalle: "Producto D",
      Serie: "D101",
      Precio: "$200",
      FechaRegistro: "2023-05-19",
      Stock: 15,
      Estado: "Activo",
    },
    {
      Id: 10,
      Detalle: "Producto E",
      Serie: "E112",
      Precio: "$450",
      FechaRegistro: "2023-06-22",
      Stock: 10,
      Estado: "Activo",
    },
    {
      Id: 1,
      Detalle: "Producto A",
      Serie: "A123",
      Precio: "$320",
      FechaRegistro: "2023-04-25",
      Stock: 50,
      Estado: "Activo",
    },
    {
      Id: 2,
      Detalle: "Producto B",
      Serie: "B456",
      Precio: "$170",
      FechaRegistro: "2023-07-25",
      Stock: 30,
      Estado: "Activo",
    },
    {
      Id: 3,
      Detalle: "Producto C",
      Serie: "C789",
      Precio: "$86",
      FechaRegistro: "2023-01-12",
      Stock: 20,
      Estado: "Activo",
    },
    {
      Id: 4,
      Detalle: "Producto D",
      Serie: "D101",
      Precio: "$200",
      FechaRegistro: "2023-05-19",
      Stock: 15,
      Estado: "Activo",
    },
    {
      Id: 5,
      Detalle: "Producto E",
      Serie: "E112",
      Precio: "$450",
      FechaRegistro: "2023-06-22",
      Stock: 10,
      Estado: "Activo",
    },
    {
      Id: 1,
      Detalle: "Producto A",
      Serie: "A123",
      Precio: "$320",
      FechaRegistro: "2023-04-25",
      Stock: 50,
      Estado: "Activo",
    },
    {
      Id: 2,
      Detalle: "Producto B",
      Serie: "B456",
      Precio: "$170",
      FechaRegistro: "2023-07-25",
      Stock: 30,
      Estado: "Activo",
    },
    {
      Id: 3,
      Detalle: "Producto C",
      Serie: "C789",
      Precio: "$86",
      FechaRegistro: "2023-01-12",
      Stock: 20,
      Estado: "Activo",
    },
    {
      Id: 4,
      Detalle: "Producto D",
      Serie: "D101",
      Precio: "$200",
      FechaRegistro: "2023-05-19",
      Stock: 15,
      Estado: "Activo",
    },
    {
      Id: 5,
      Detalle: "Producto E",
      Serie: "E112",
      Precio: "$450",
      FechaRegistro: "2023-06-22",
      Stock: 10,
      Estado: "Activo",
    },
    {
      Id: 1,
      Detalle: "Producto A",
      Serie: "A123",
      Precio: "$320",
      FechaRegistro: "2023-04-25",
      Stock: 50,
      Estado: "Activo",
    },
    {
      Id: 2,
      Detalle: "Producto B",
      Serie: "B456",
      Precio: "$170",
      FechaRegistro: "2023-07-25",
      Stock: 30,
      Estado: "Activo",
    },
    {
      Id: 3,
      Detalle: "Producto C",
      Serie: "C789",
      Precio: "$86",
      FechaRegistro: "2023-01-12",
      Stock: 20,
      Estado: "Activo",
    },
    {
      Id: 4,
      Detalle: "Producto D",
      Serie: "D101",
      Precio: "$200",
      FechaRegistro: "2023-05-19",
      Stock: 15,
      Estado: "Activo",
    },
    {
      Id: 5,
      Detalle: "Producto E",
      Serie: "E112",
      Precio: "$450",
      FechaRegistro: "2023-06-22",
      Stock: 10,
      Estado: "Activo",
    },
  ];

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(data);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleEstado = (index: any) => {
    const newProducts = [...products];
    newProducts[index].Estado =
      newProducts[index].Estado === "Activo" ? "Desactivado" : "Activo";
    setProducts(newProducts);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="relative h-[678px]">
        <div className="absolute top-[34px] left-[40px] w-[228px] h-[587px] rounded-lg shadow-md bg-white p-4">
          <h1 className="text-2xl font-Roboto h-[60px]">Admin</h1>
          <ul className="list-none">
            <li className="ml-4 h-[60px]">
              <a href="/">Dashboard</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">Usuarios registrados</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">Productos</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">Ordenes</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">Productos más vendidos</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="/">Series</a>
            </li>
          </ul>
        </div>
      </div>

      <table
        id="tabla1"
        className="absolute top-[216px] left-[340px] w-[1500px] h-[470px] rounded-lg shadow-md bg-white p-3"
      >
        <thead>
          <tr className="ml-3 h-[55px]">
            <th className="pl-8]">Id</th>
            <th className="pl-8">Detalle</th>
            <th className="pl-8">Serie</th>
            <th className="pl-8">Precio</th>
            <th className="pl-8">Fecha registro</th>
            <th className="pl-8">Stock</th>
            <th className="pl-8">Estado</th>
            <th className="pl-6">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={item.Id}>
              <td className="pl-20">{item.Id}</td>
              <td className="pl-20">{item.Detalle}</td>
              <td className="pl-20">{item.Serie}</td>
              <td className="pl-20">{item.Precio}</td>
              <td className="pl-20">{item.FechaRegistro}</td>
              <td className="pl-20">{item.Stock}</td>
              <td className="pl-20">{item.Estado}</td>
              <td className="pl-28">
                <button
                  onClick={() => toggleEstado(startIndex + index)}
                  className="p-1 text-black rounded"
                >
                  Activar/Desactivar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="relative flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          className={`absolute w-[200px] right-[56px] bottom-[15px] p-2 bg-black text-white rounded ${
            currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage <= 1}
        >
          Anterior
        </button>

        <button
          onClick={handleNextPage}
          className={`absolute w-[200px] right-[260px] bottom-[15px] p-2 bg-black text-white rounded ${
            endIndex >= products.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={endIndex >= products.length}
        >
          Siguiente
        </button>
      </div>

      <div className="absolute top-[98px] left-[340px] w-[1500px] h-[45px] rounded-lg shadow-md bg-white p-3">
        <h1>Productos</h1>
        <button
          type="button"
          className="absolute w-[200px] right-[30px] bottom-[6px] p-1 bg-black text-white rounded"
        >
          Agregar producto
        </button>
        <input
          type="text"
          placeholder="Buscar por id, detalle o serie"
          className="absolute top-[58px] left-[1px] w-[1500px] h-[45px] rounded-lg shadow-md bg-white p-3"
        />
      </div>
    </>
  );
}
