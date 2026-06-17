import { useEffect, useState } from "react";

function GitHubIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/facebook/react/issues"
    )
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setIssues(datos.slice(0, 5));
      })
      .catch((error) =>
        console.error("Error:", error)
      );
  }, []);

  return (
    <div className="tabla">
      <h2>Incidencias Reales de GitHub</h2>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Estado</th>
            <th>Autor</th>
          </tr>
        </thead>

        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.title}</td>

              <td>
                {issue.state === "open"
                  ? "Abierta"
                  : "Cerrada"}
              </td>

              <td>{issue.user.login}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GitHubIssues;