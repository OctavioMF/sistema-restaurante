import { HashRouter, Routes, Route } from "react-router-dom";
import SalesPage from "./Products/Sales/SalesPage";
import Layout from "./Common/Layout";
import StockPage from "./Products/Stock/StockPage";
import ThemeContext from "./Common/ThemeContext";

const Dashboard = () => <h1>Reportes Principal</h1>;
const Mesas = () => <h1>Gestión de Mesas</h1>;

export default function App() {
  return (
      <ThemeContext>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/mesas" element={<Mesas/>} />
              <Route path="/productos/ventas" element={<SalesPage/>} />
              <Route path="/productos/listado" element={<StockPage/>}/>
            </Routes>
          </Layout>
        </HashRouter>
      </ThemeContext>
  )
}