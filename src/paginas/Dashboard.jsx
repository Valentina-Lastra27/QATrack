import { useState } from "react";

import Header from "../componentes/Header";
import Sidebar from "../componentes/Sidebar";
import BugForm from "../componentes/BugForm";
import BugTable from "../componentes/BugTable";
import GitHubIssues from "../componentes/GitHubIssues";
import Footer from "../componentes/Footer";

import "../estilos/dashboard.css";

function Dashboard() {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      titulo: "Error Login",
      estado: "Pendiente",
      prioridad: "Alta",
      fecha: "2026-06-01"
    },
    {
      id: 2,
      titulo: "Error Registro",
      estado: "Resuelto",
      prioridad: "Media",
      fecha: "2026-06-06"
    },
    {
      id: 3,
      titulo: "Error Dashboard",
      estado: "En proceso",
      prioridad: "Baja",
      fecha:"2026-06-09",
    },
  ]);

  const [bugEditando, setBugEditando] = useState(null);
  const [filtroPrioridad, setFiltroPrioridad] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const agregarBug = (nuevoBug) => {
    setBugs([
      ...bugs,
      {
        id: bugs.length + 1,
        ...nuevoBug,
      },
    ]);
  };

  const actualizarBug = (bugActualizado) => {
  setBugs(
    bugs.map((bug) =>
      bug.id === bugActualizado.id
        ? bugActualizado
        : bug
    )
  );

  setBugEditando(null);
 };

  const eliminarBug = (id) => {
  setBugs(bugs.filter((bug) => bug.id !== id));
  };

  const bugsFiltrados = bugs.filter((bug) => {
  const coincidePrioridad =
    filtroPrioridad === "Todas" ||
    bug.prioridad === filtroPrioridad;

   const coincideBusqueda =
    bug.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());

   return (
    coincidePrioridad &&
    coincideBusqueda
  );
 });

  return (
    <div className="dashboard">
      <Sidebar />

      

      <div className="contenido">
           <Header totalIncidencias={bugs.length} />

           

            <BugForm 
              agregarBug={agregarBug}
              actualizarBug={actualizarBug}
              bugEditando={bugEditando}/>

              <div className="formulario">
                <label>Buscar incidencia</label>

                  <input
                   type="text"
                   placeholder="Buscar por título..."
                   value={busqueda}
                   onChange={(e) =>
                   setBusqueda(e.target.value)
                   }
                  />
             </div>

              <div className="formulario">
                 <label>Filtrar por prioridad</label>

                  <select
                    value={filtroPrioridad}
                    onChange={(e) =>
                    setFiltroPrioridad(e.target.value)
                   }
                   >
                    <option>Todas</option>
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Baja</option>
                 </select>
               </div>

          <BugTable
           bugs={bugsFiltrados}
            eliminarBug={eliminarBug}
            setBugEditando={setBugEditando}
          />
          <GitHubIssues />
          <Footer />
      </div>
    </div>
  );
}

export default Dashboard;