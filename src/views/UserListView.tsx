import { useState } from "react";
import { Pagination } from "@/components/Pagination";

export default function UserListView() {
  const data = [
    {
      Id: 1,
      Nombre: "Juan",
      Apellido: "Pérez",
      FechaRegistro: "25/04/2023",
      Correo: "juan.perez@example.com",
      Estado: "Activo",
    },
    {
      Id: 2,
      Nombre: "María",
      Apellido: "López",
      FechaRegistro: "25/04/2023",
      Correo: "maria.lopez@example.com",
      Estado: "Activo",
    },
    {
      Id: 3,
      Nombre: "Carlos",
      Apellido: "Martínez",
      FechaRegistro: "25/04/2023",
      Correo: "carlos.martinez@example.com",
      Estado: "Inactivo",
    },
  ];

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState(data);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = users.slice(startIndex, endIndex);

  const handleViewClick = () => {
    window.location.href = "http://localhost:3000/detailuser";
  };

  const handleToggleStatusClick = (id: number) => {
    setUsers(
      users.map((user) =>
        user.Id === id
          ? {
              ...user,
              Estado: user.Estado === "Activo" ? "Inactivo" : "Activo",
            }
          : user
      )
    );
  };

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
        className="absolute top-[216px] left-[340px] w-[1500px] h-[200px] rounded-lg shadow-md bg-white p-3 table-fixed"
      >
        <thead>
          <tr className="ml-3 h-[55px]">
            <th className="px-4 w-[100px] text-left">ID</th>
            <th className="px-4 w-[200px] text-left">Nombre</th>
            <th className="px-4 w-[200px] text-left">Apellido</th>
            <th className="px-4 w-[250px] text-left">Correo</th>
            <th className="px-4 w-[150px] text-left">Fecha de registro</th>
            <th className="px-4 w-[100px] text-left">Estado</th>
            <th className="px-4 w-[200px] text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.Id}>
              <td className="px-4 w-[100px] text-left">{item.Id}</td>
              <td className="px-4 w-[200px] text-left">{item.Nombre}</td>
              <td className="px-4 w-[200px] text-left">{item.Apellido}</td>
              <td className="px-4 w-[250px] text-left">{item.Correo}</td>
              <td className="px-4 w-[150px] text-left">{item.FechaRegistro}</td>
              <td className="px-4 w-[100px] text-left">{item.Estado}</td>
              <td className="px-4 w-[200px] text-center">
                <button
                  onClick={handleViewClick}
                  className="p-1 text-black rounded underline"
                >
                  Ver
                </button>
                {" | "}
                <button
                  onClick={() => handleToggleStatusClick(item.Id)}
                  className="p-1 text-black rounded underline"
                >
                  {item.Estado === "Activo" ? "Desactivar" : "Activar"}
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

      <div className="absolute top-[98px] left-[340px] w-[1500px] h-[45px] rounded-lg shadow-md bg-[#D9D9D9] p-3">
        <h1>Usuarios registrados</h1>
        <input
          type="text"
          placeholder="Buscar por correo, nombre o apellidos..."
          className="absolute top-[58px] left-[1px] w-[1500px] h-[45px] rounded-lg shadow-md bg-white p-3"
        />
      </div>
    </>
  );
}
