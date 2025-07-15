import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Admin } from "./pages/admin/admin";
export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
