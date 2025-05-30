
import { Navigation } from "../../components/ui/Navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/ui/Footer";

export const GuestLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
