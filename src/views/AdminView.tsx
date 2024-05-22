export default function AdminView() {
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

      <div className="absolute top-[100px] left-[304px] w-[1506px] h-[45px] rounded-lg shadow-md bg-gray-300 p-3">
        <label>Dashboard</label>
        <input type="date" className="bg-gray-300 absolute left-[1350px]" />
      </div>

      <div className="absolute top-[200px] left-[304px] w-[400px] h-[300px] rounded-lg shadow-md bg-gray-300 p-14">
        <h2 className="font-Inter">7</h2>
        <p>Aquí puedes agregar información estática.</p>
      </div>

      <div className="absolute top-[200px] left-[850px] w-[400px] h-[300px] rounded-lg shadow-md bg-gray-300 p-14">
        <h2 className="font-Inter">0</h2>
        <p>Aquí puedes agregar información estática.</p>
      </div>

      <div className="absolute top-[200px] left-[1410px] w-[400px] h-[300px] rounded-lg shadow-md bg-gray-300 p-14">
        <h2 className="font-Inter">0</h2>
        <p>Aquí puedes agregar información estática.</p>
      </div>
    </>
  );
}
