import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

function AppLayout() {
  const location = useLocation();

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Toast position="top-right" deleteInterval={5000} />
      <main className={location.pathname === "/" ? `bg-white` : `bg-darkBlue`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
