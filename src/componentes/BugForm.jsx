function BugForm() {
  return (
    <div className="formulario">
      <h2>Nueva Incidencia</h2>

      <label>Título</label>
      <input type="text" placeholder="Ingrese el título" />

      <label>Descripción</label>
      <textarea placeholder="Describa el problema"></textarea>

      <label>Prioridad</label>
      <select>
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>

      <label>Estado</label>
      <select>
        <option>Pendiente</option>
        <option>En proceso</option>
        <option>Resuelto</option>
      </select>

      <button>Guardar incidencia</button>
    </div>
  );
}

export default BugForm;