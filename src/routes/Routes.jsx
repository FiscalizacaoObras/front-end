import { Routes, Route } from "react-router-dom";
import ViewTemplates from "../pages/ViewTemplates.jsx";
import ShowCropp from "../components/layout/ShowCropp.jsx"
import Login from "../pages/Login.jsx";
import Register from "../pages/Cad.jsx";
import Create from "../pages/Create.jsx";

import NewField from "../components/modal/NewField.jsx";
import UploadDocument from "../pages/UploadDocument.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<ViewTemplates />} />
      <Route path="/visualizar" element={<ViewTemplates />} />
      <Route path="/criar" element={<Create />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ver" element={<ShowCropp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/modal" element={<NewField isOpen={true} />} />
      <Route path="/enviar/:id" element={<UploadDocument />} />
    </Routes>
  );
}

export default AppRoutes;