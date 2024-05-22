import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
