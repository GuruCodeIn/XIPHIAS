import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Citizenship from "../pages/Citizenship";
import Residency from "../pages/Residency";
import Eligibility from "../pages/Eligibility";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Resources from "../pages/Resources";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="citizenship" element={<Citizenship />} />
          <Route path="residency" element={<Residency />} />
          <Route path="eligibility" element={<Eligibility />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;