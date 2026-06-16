function Header({ totalIncidencias }) {
  return (
    <div className="header">
      <h1>QATrack</h1>

      <p>
        Sistema de Gestión de Bugs e Incidencias
      </p>

      <p>
        Total de incidencias: {totalIncidencias}
      </p>
    </div>
  );
}

export default Header;
