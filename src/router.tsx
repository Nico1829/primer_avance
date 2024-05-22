import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import PrincipalView from "@/views/PrincipalView";
import ResultadosView from "@/views/ResultadosView";
import DetalleView from "@/views/DetalleView";
import CartView from "@/views/CartView";
import ChangePasswordView from "./views/ChangePasswordView";
import CuentaView from "./views/CuentaView";
import LoginErrorView from "./views/LoginErrorView";
import LoginView from "./views/LoginView";
import NuevoUsuarioView from "./views/NuevoUsuarioView";
import RecuperacionView from "./views/RecuperacionView";
import RegistrationDataView from "./views/ReistrationDataView";
import SeriesListView from "./views/SeriesListView";
import AdminView from "./views/AdminView";
import AgregarProductoView from "./views/AgregarProductoView";
import LProductosView from "./views/LProductosView";
import UserListView from "./views/UserListView";
import OrderAdminView from "./views/OrderAdminView";
import DetailUserView from "./views/DetailUserView";
import OrderDetailView from "./views/OrderDetailView";
import AddserieView from "./views/AddSerieView";
import CheckoutView from "./views/CheckOutView";
import CompletedOrderView from "./views/CompletedOrderView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/cart" element={<CartView />} />
          <Route path="/changepassword" element={<ChangePasswordView />} />
          <Route path="/cuenta" element={<CuentaView />} />
          <Route path="/detalle" element={<DetalleView />} />
          <Route path="/loginerror" element={<LoginErrorView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/nuevousuario" element={<NuevoUsuarioView />} />
          <Route path="/" element={<PrincipalView />} index />
          <Route path="/recuperacion" element={<RecuperacionView />} index />
          <Route path="/resultados" element={<ResultadosView />} />
          <Route path="/registrationdata" element={<RegistrationDataView />} />
          <Route path="/serieslist" element={<SeriesListView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/agregarproducto" element={<AgregarProductoView />} />
          <Route path="/lproductos" element={<LProductosView />} />
          <Route path="/userlist" element={<UserListView />} />
          <Route path="/orderadmin" element={<OrderAdminView />} />
          <Route path="/detailuser" element={<DetailUserView />} />
          <Route path="/orderdetail" element={<OrderDetailView />} />
          <Route path="/addserie" element={<AddserieView />} />
          <Route path="/checkout" element={<CheckoutView />} />
          <Route path="/completedorder" element={<CompletedOrderView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
