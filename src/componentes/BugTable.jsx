function BugTable() {
  const bugs = [
    {
      id: 1,
      titulo: "Error Login",
      estado: "Pendiente",
      prioridad: "Alta"
    },
    {
      id: 2,
      titulo: "Error Registro",
      estado: "Resuelto",
      prioridad: "Media"
    },
    {
      id: 3,
      titulo: "Error Dashboard",
      estado: "En proceso",
      prioridad: "Baja"
    },
    {
      id: 4,
      titulo: "Error Perfil",
      estado: "Pendiente",
      prioridad: "Alta"
    },
    {
      id: 5,
      titulo: "Error Reportes",
      estado: "En proceso",
      prioridad: "Media"
    }
  
  ];

  return (
    <div className="tabla">
      <h2>Incidencias</h2>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Estado</th>
            <th>Prioridad</th>
          </tr>
        </thead>

        <tbody>
          {bugs.map((bug) => (
            <tr key={bug.id}>
              <td>{bug.titulo}</td>
              <td>{bug.estado}</td>
              <td>{bug.prioridad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BugTable;