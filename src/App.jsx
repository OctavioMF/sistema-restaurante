import { HashRouter, Routes, Route } from "react-router-dom";
import StockPage from "./stockPage/StockPage";
import Layout from "./commonComponents/Layout";

const Dashboard = () => <h1>Dashboard Principal</h1>;
const Stock = () => <h1>Pantalla de Ventas</h1>;
const Mesas = () => <h1>Gestión de Mesas</h1>;

export default function App() {
  return (
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/mesas" element={<Mesas/>} />
        <Route path="/productos/ventas" element={<StockPage/>} />
        <Route path="/productos/listado" element={<Stock/>}/>
      </Routes>
    </Layout>
  </HashRouter>
  )
}