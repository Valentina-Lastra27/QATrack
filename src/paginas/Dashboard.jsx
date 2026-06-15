import Header from "../componentes/Header";
import Sidebar from "../componentes/Sidebar";
import BugForm from "../componentes/BugForm";
import BugTable from "../componentes/BugTable";

import "../estilos/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="contenido">
        <Header />
        <BugForm />
        <BugTable />
      </div>
    </div>
  );
}

export default Dashboard;