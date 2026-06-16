function BugTable({ bugs, eliminarBug }) {
  return (
    <div className="tabla">
      <h2>Incidencias</h2>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Estado</th>
            <th>Prioridad</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
        {bugs.length === 0 ? (
       <tr>
         <td colSpan="4">
          No hay incidencias registradas.
         </td>
       </tr>
        ) : (
       bugs.map((bug) => (
       <tr key={bug.id}>
         <td>{bug.titulo}</td>
         <td>{bug.estado}</td>
         <td>{bug.prioridad}</td>
         <td>{bug.fecha}</td>
         <td>
             <button
              onClick={() => {
              if (window.confirm("¿Desea eliminar esta incidencia?")) {
               eliminarBug(bug.id);
              }
           }}
           >
            Eliminar
            </button>
         </td>
       </tr>
    ))
  )}
</tbody>
      </table>
    </div>
  );
}

export default BugTable;