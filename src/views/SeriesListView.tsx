export default function SeriesListView() {
  return (
    <div className="flex h-[678px]">
      {" "}
      {/* Margen general de la página */}
      <div className="bg-white shadow-lg w-[228px] h-[624px] pl-[40px] mt-[20px] ml-[20px]">
        {" "}
        {/* Barra de administración con altura y margen ajustados */}
        <ul>
          <li className="mb-2 mt-[20px]">
            <button className="w-full text-left  font-bold text-[20px] hover:bg-gray-100">
              Admin
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Dashboard
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Usuarios registrados
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Productos
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Órdenes
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Productos más vendidos
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Series
            </button>
          </li>
        </ul>
      </div>
      <div className="ml-8 flex flex-col w-full mr-[30px]">
        <div className="text-left border-[1px] pt-[8px] border-black w-full mt-[20px] pl-[21px] h-[45px] text-[16px] font-bold bg-[#D9D9D9]">
          Series
        </div>
        <div className="mt-[15px]">
          <input
            className="p-3 w-full border rounded border-black"
            type="text"
            placeholder="Buscar por nombre, descripción o ID..."
          />
        </div>
        <div className="flex-grow p-5 mt-[19px] mb-[20px] bg-white overflow-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Fecha de Creación</th>
                <th className="px-4 py-2">No. Productos</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Manga Dragon Ball VIZ</td>
                <td className="px-4 py-2">
                  Colección del manga de dragon ball publicadas por VIZ
                </td>
                <td className="px-4 py-2">11/02/2022</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:text-blue-800">
                    Ver
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="ml-[900px] mb-[21px] ">
          <button className="text-[16px] text-gray-800 font-bold py-2 px-4 rounded items-center">
            Anterior
          </button>
          <span>Página 1 de 11</span>
          <button className="text-[16px] text-gray-800 font-bold py-2 px-4 rounded items-center">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
