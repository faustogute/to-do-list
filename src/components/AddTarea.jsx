import { useState } from "react";

const AddTarea = ({ onAdd }) => {
  const [texto, setTexto] = useState("");
  const [fecha, setFecha] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!texto) {
      alert("Por favor introduce una tarea");
    }

    onAdd({ texto, fecha, done });

    setTexto("");
    setFecha("");
    setDone(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tarea</label>
        <input
          type="text"
          placeholder="Introduce una tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Fecha</label>
        <input
          type="text"
          placeholder="Introduce una fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Terminada</label>
        <input
          type="checkbox"
          checked={done}
          value={done}
          onChange={(e) => setDone(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Agregar tarea" className="btn btn-block" />
    </form>
  );
};

export default AddTarea;
