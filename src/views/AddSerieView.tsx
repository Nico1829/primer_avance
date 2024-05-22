export default function AddserieView() {
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
          Agregar Serie
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            {" "}
            {/* Contenedor para agregar imagen */}
            <div className="mt-[20px] pl-[20px] border-[1px] w-[500px] h-[334px] rounded border-black bg-white"></div>
            <button className="w-[250px] h-[48px] mt-[30px] border-black border-[1px] text-black py-2 px-4 rounded ml-[120px]">
              Agregar Imagen
            </button>
          </div>
          <div className="flex flex-col w-3/4 p-[20px]">
            <div className="flex flex-col mb-4">
              <label className="font-bold mb-2">Nombre</label>
              <input
                type="text"
                className="h-[36px] border-black rounded border-2 p-2"
                placeholder=""
              />
              <label className="font-bold mt-4 mb-2">Descripción</label>
              <input
                className="h-[68px] rounded border-black border-2 p-2"
                placeholder=""
              />
              <label className="bg-[#D9D9D9] mt-[30px] pt-[10px] pl-[20px] h-[45px] font-bold">
                Productos en la Serie
              </label>
              <div className="bg-white font-bold"></div>
              <table className="w-full text-left border-2 mb-4 bg-white">
                <thead>
                  <tr>
                    <th className="pl-[20px]">ID</th>
                    <th>Descripción</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pl-[20px]">1</td>
                    <td>Manga Dragon Ball Vol 1</td>
                    <td>
                      <button className=" text-black py-1 px-2">Remover</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-[20px]">2</td>
                    <td>Manga Dragon Ball Vol 2</td>
                    <td>
                      <button className="text-black py-1 px-2">Remover</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="bg-black text-white py-2 px-4 rounded h-[47px] w-[250px] ml-[450px]">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
