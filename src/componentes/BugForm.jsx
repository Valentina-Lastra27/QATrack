import { useState, useEffect } from "react";

function BugForm({ agregarBug,  actualizarBug ,bugEditando })  {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("Alta");
  const [estado, setEstado] = useState("Pendiente");
  const [fecha, setFecha] = useState(
  new Date().toISOString().split("T")[0]
  );
  useEffect(() => {
  if (bugEditando) {
    setTitulo(bugEditando.titulo);
    setDescripcion(bugEditando.descripcion || "");
    setPrioridad(bugEditando.prioridad);
    setEstado(bugEditando.estado);
    setFecha(bugEditando.fecha);
  
  }
 }, [bugEditando]);

  const guardarIncidencia = () => {
  if (!titulo.trim()) return;

  if (bugEditando) {
    actualizarBug({
      ...bugEditando,
      titulo,
      descripcion,
      prioridad,
      estado,
      fecha,
    });
  } else {
    agregarBug({
      titulo,
      descripcion,
      prioridad,
      estado,
      fecha,
    });
  }

  setTitulo("");
  setDescripcion("");
  setPrioridad("Alta");
  setEstado("Pendiente");
  setFecha(
  new Date().toISOString().split("T")[0]
);
};
  return (
    <div className="formulario">
      <h2>Nueva Incidencia</h2>

      <label>Título</label>
      <input
        type="text"
        placeholder="Ingrese el título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label>Descripción</label>
      <textarea
        placeholder="Describa el problema"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>

      <label>Prioridad</label>
      <select
        value={prioridad}
        onChange={(e) => setPrioridad(e.target.value)}
      >
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>

      <label>Estado</label>
      <select
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      >
        <option>Pendiente</option>
        <option>En proceso</option>
        <option>Resuelto</option>
      </select>

      <label>Fecha</label>

      <input
         type="date"
         value={fecha}
         onChange={(e) => setFecha(e.target.value)}
      />

      <button onClick={guardarIncidencia}>
        Guardar incidencia
      </button>
    </div>
  );
}

export default BugForm;