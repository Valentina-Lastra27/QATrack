import { useState } from "react";

function BugForm({ agregarBug }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("Alta");
  const [estado, setEstado] = useState("Pendiente");

  const guardarIncidencia = () => {
    if (!titulo.trim()) return;

      agregarBug({
       titulo,
       descripcion,
       prioridad,
       estado,
       fecha: new Date().toLocaleDateString("es-AR"),
      });

    setTitulo("");
    setDescripcion("");
    setPrioridad("Alta");
    setEstado("Pendiente");
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

      <button onClick={guardarIncidencia}>
        Guardar incidencia
      </button>
    </div>
  );
}

export default BugForm;