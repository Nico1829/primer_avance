export default function RegistrationDataView() {
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
              Mi Cuenta
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Órdenes Recientes
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Datos de Registro
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left p-4 hover:bg-gray-100 text-[16px]">
              Cambiar Password
            </button>
          </li>
        </ul>
      </div>
      <div className="ml-8 flex flex-col w-full mr-[30px]">
        <div className="text-left border-[1px] pt-[8px] border-black w-full mt-[20px] pl-[21px] h-[45px] text-[16px] font-bold bg-[#D9D9D9]">
          Datos de Registro
        </div>
        <div className="mt-[49px] h-[64px] w-[456px] ml-[350px]">
          <input
            className="p-3 w-full border rounded border-black"
            type="text"
            placeholder="Nombre"
          />
        </div>
        <div className="mt-[17px] h-[64px] w-[456px] ml-[350px]">
          <input
            className="p-3 w-full border rounded border-black"
            type="text"
            placeholder="Apellido"
          />
        </div>
        <div className="mt-[17px] h-[64px] w-[456px] ml-[350px]">
          <input
            className="p-3 w-full border rounded border-black"
            type="text"
            placeholder="Correo"
          />
        </div>
        <div className="border-white mt-[73px] h-[64px] w-[360px] ml-[403px] border rounded bg-black">
          <button className="text-white p-4 pl-[142px] text-[18px]">
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
}
