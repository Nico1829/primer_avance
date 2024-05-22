export default function OrderDetailView(){
  return(
   <div className="flex h-[1423px] flex-col">
    <h2 className="ml-[20px] mt-[20px] text-[34px] ext-lg font-bold mb-4">Detalles de Orden Nro 12312312344</h2>
    <div className="flex flex-col w-full mr-[30px]">
      <div className="mb-4 mt-[20px] mx-[20px] border-black font-bold bg-[#D9D9D9] h-[52px] text-[24px] text-left border-[1px] pt-[8px] pl-[20px]">
          Datos de compra
      </div>
      <div className="flex">
        <div className="bg-white w-[715px] h-[520px] mx-[20px] mt-[20px] pl-[20px]">
          <p className="font-bold text-[20px] mt-[20px]"><strong>Dirección de Envío</strong></p>
          <p className="text-[20px] mt-[40px] pl-[50px]">Jiron Huiracocha 2081 Departamento 922</p>
          <p className="text-[20px] pl-[50px]">Jesús María, Lima</p>
          <p className="text-[20px] pl-[50px]">Lima</p>
          <p className="text-[20px] pl-[50px]">Perú</p>
        </div>
        <div className="bg-white w-[715px] h-[520px] mx-[20px] mt-[20px] pl-[20px]">
          <div>
            <p className="font-bold mb-2 text-[20px] mt-[20px]"><strong>Pago</strong></p>
            <form className="mt-[40px]">
              <label className="pl-[50px] text-[18px]">
                <input type="radio" name="payment" value="qr" /> Pago con código QR
            </label><br />
            <label className="pl-[50px] text-[18px]">
              <input type="radio" name="payment" value="card" checked /> Pago con tarjeta de crédito
            </label>
            <p className="pl-[50px] text-[18px] mt-[40px]">Tarjeta de Crédito que termina en: ***8859</p>
            </form>
          </div>
        </div>
      </div>
      <div className="mb-4 mt-[20px] mx-[20px] border-black font-bold bg-[#D9D9D9] h-[52px] text-[24px] text-left border-[1px] pt-[8px] pl-[20px]">
          Método de Envío
      </div>
      <div className="bg-white mb-4 mt-[20px] mx-[20px] h-[68px]">
        <form className="flex justify-start">
          <label className="block mt-[24px] text-[18px] ml-[200px] flex-items-center">
            <input type="radio" name="shipping" value="economical" />
            <span className="ml-2 pl-[20px]">Económico Aéreo - S/10.00</span>
          </label>
          <label className="block mt-[24px] text-[18px] ml-[400px] flex-items-center">
            <input type="radio" name="shipping" value="priority" />
            <span className="ml-2 pl-[20px]">Envío prioritario (5 a 10 días) - S/17.00</span>
          </label>
        </form>
      </div>
      <div className="flex">
          <div className="bg-white w-[715px] h-[467px] mx-[20px] mt-[20px] pl-[20px]">
            <p className="mt-[20px] text-[20px] font-bold mb-4"><strong>Items en Pedido:</strong></p>
            <ul className="list-disc pl-[50px] mt-[40px]">
              <li className="text-[18px] mb-2">1x Juego de Cartas Pokemon Masters League - S/ 50.00</li>
              <li className="text-[18px] mb-2">2x Juego de Cartas Magic The Gathering - S/ 50.00</li>
            </ul>
          </div>
          <div className="bg-white w-[715px] h-[467px] mx-[20px] mt-[20px] pl-[20px]">
            <p className="mt-[20px] text-[20px] font-bold mb-4"><strong>Resumen de Orden</strong></p>
            <div className="text-[18px] mb-3 pl-[50px] mt-[40px] flex-justify-between">
              <span>Subtotal:</span>
              <span className="ml-[200px] ">S/ 100.00</span>
            </div>
            <div className="text-[18px] mb-3 pl-[50px] mt-[40px] flex-between">
              <span>Envío:</span>
              <span className="ml-[220px]">S/ 17.00</span>
            </div>
            <div className="text-[18px] mb-3 pl-[50px] mt-[40px] flex-between">
              <span>Impuestos:</span>
              <span className="ml-[180px]">S/ 18.00</span>
            </div>
            <div className="text-[18px] mb-3 pl-[50px] mt-[40px] flex-between">
              <span>Total:</span>
              <span className="ml-[220px]">S/ 135.00</span>
            </div>
            <button className="border-[2px] border-black text-black w-[350px] font-bold py-2 px-4 rounded mt-[80px] ml-[160px] ">
              Cancelar Pedido
            </button>
          </div>
      </div>
    </div>
   </div>
  );
}