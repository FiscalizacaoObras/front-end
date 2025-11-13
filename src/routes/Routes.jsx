import { Routes, Route } from "react-router-dom";
import ViewTemplates from "../pages/ViewTemplates.jsx";
import Create from "../pages/Create.jsx";
import UploadDocument from "../pages/UploadDocument.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<ViewTemplates />} />
      <Route path="/visualizar" element={<ViewTemplates />} />
      <Route path="/criar" element={<Create />} />
      <Route path="/enviar/:id" element={<UploadDocument/>}/>
    </Routes>
  );
}

export default AppRoutes;