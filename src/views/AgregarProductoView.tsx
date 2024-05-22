export default function AgregarProductoView() {
  return (
    <>
      <div className="relative h-[678px]">
        <div className="absolute top-[34px] left-[40px] w-[228px] h-[587px] rounded-lg shadow-md bg-white p-4">
          <h1 className="text-2xl font-Roboto h-[60px]">Admin</h1>
          <ul className="list-none">
            <li className="ml-4 h-[60px]">
              <a href="">Dashboard</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="">Usuarios registrados</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="">Productos</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="">Ordenes</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="">Productos más vendidos</a>
            </li>
            <li className="ml-4 h-[60px]">
              <a href="">Series</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute top-[98px] left-[340px] w-[1500px] h-[45px] rounded-lg shadow-md bg-white p-3">
        <h1>Productos</h1>
      </div>

      <div>
        <input
          type="text"
          className="border-[1px] absolute top-[190px] left-[340px] w-[516px] h-[370px] rounded-lg shadow-md bg-white p-4"
        />
        <button
          type="button"
          className="absolute w-[200px] right-[510px] left-[495px] top-[600px] p-4 bg-black text-white rounded border border-black"
        >
          Agregar imagen
        </button>
      </div>
      <div>
        <label className="absolute top-[200px] left-[940px] w-[1500px] h-[25px] font-Roboto">
          Nombre
        </label>
        <input
          type="text"
          className="border-[1px] absolute top-[230px] left-[940px] w-[646px] h-[37px] rounded-lg shadow-md bg-white p-4"
        />
      </div>
      <div>
        <label className="absolute top-[280px] left-[940px] w-[1500px] h-[25px] font-Roboto">
          Descripcion
        </label>
        <input
          type="text"
          className="border-[1px] absolute top-[310px] left-[940px] w-[646px] h-[57px] rounded-lg shadow-md bg-white p-4"
        />
      </div>
      <div>
        <label className="absolute top-[380px] left-[940px] w-[1500px] h-[5px] font-Roboto">
          Caracteristicas
        </label>
        <input
          type="text"
          className="border-[1px] absolute top-[410px] left-[940px] w-[646px] h-[120px] rounded-lg shadow-md bg-white p-4"
        />
      </div>
      <div>
        <label className="absolute top-[540px] left-[940px] w-[1500px] h-[5px] font-Roboto">
          Marca
        </label>
        <input
          type="text"
          className="border-[1px] absolute top-[570px] left-[940px] w-[170px] h-[15px] rounded-lg shadow-md bg-white p-4"
        />
      </div>
      <div>
        <label className="absolute top-[540px] left-[1180px] w-[1500px] h-[5px] font-Roboto">
          Serie
        </label>
        <input
          type="text"
          className="border-[1px] absolute top-[570px] left-[1180px] w-[170px] h-[15px] rounded-lg shadow-md bg-white p-4"
        />
      </div>
      <div>
        <label className="absolute top-[540px] left-[1410px] w-[1500px] h-[5px] font-Roboto">
          Precio S/.
        </label>
        <input
          type="text"
          className="border-[1px] absolute top-[570px] left-[1410px] w-[170px] h-[15px] rounded-lg shadow-md bg-white p-4"
        />
      </div>
    </>
  );
}
