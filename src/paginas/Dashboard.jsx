import { useState } from "react";

import Header from "../componentes/Header";
import Sidebar from "../componentes/Sidebar";
import BugForm from "../componentes/BugForm";
import BugTable from "../componentes/BugTable";

import "../estilos/dashboard.css";

function Dashboard() {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      titulo: "Error Login",
      estado: "Pendiente",
      prioridad: "Alta",
      fecha: "01/06/2026",
    },
    {
      id: 2,
      titulo: "Error Registro",
      estado: "Resuelto",
      prioridad: "Media",
      fecha: "9/06/2026",
    },
    {
      id: 3,
      titulo: "Error Dashboard",
      estado: "En proceso",
      prioridad: "Baja",
      fecha: "10/06/2026",
    },
  ]);

  const agregarBug = (nuevoBug) => {
    setBugs([
      ...bugs,
      {
        id: bugs.length + 1,
        ...nuevoBug,
      },
    ]);
  };

  const eliminarBug = (id) => {
  setBugs(bugs.filter((bug) => bug.id !== id));
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="contenido">
           <Header totalIncidencias={bugs.length} />

            <BugForm agregarBug={agregarBug} />

          <BugTable
           bugs={bugs}
            eliminarBug={eliminarBug}
          />
      </div>
    </div>
  );
}

export default Dashboard;