
import { Navigation } from "../../components/ui/Navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/ui/Footer";

export const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
