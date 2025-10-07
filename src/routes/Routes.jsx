import { Routes, Route } from "react-router-dom";
import ViewTemplates from "../pages/ViewTemplates.jsx";
import View from "../pages/View.jsx"
import Login from "../pages/Login.jsx";
import Register from "../pages/Cad.jsx";
import Create from "../pages/Create.jsx";
import ImgCropper from "../components/ui/ImgCropper.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<ViewTemplates />} />
      <Route path="/visualizar" element={<ViewTemplates />} />
      <Route path="/criar" element={<Create />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/croppr" element={<ImgCropper />} />
    </Routes>
  );
}

export default AppRoutes;