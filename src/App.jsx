import { useState } from "react";
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import AddTarea from "./components/AddTarea";

function App() {
  const [showAddTarea, setShowAddTarea] = useState(false);

  const [tareas, setTareas] = useState([
    { id: 1, texto: "ir por Alonso", fecha: "5 de julio de 2022", done: true },
    {
      id: 2,
      texto: "correr comparativos",
      fecha: "10 de julio de 2022",
      done: false,
    },
    {
      id: 3,
      texto: "preparativos de cumpleaños",
      fecha: "25 de julio de 2022",
      done: false,
    },
  ]);

  // Agregar Tarea
  const addTarea = (tarea) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const nuevaTarea = { id, ...tarea };
    setTareas([...tareas, nuevaTarea]);
  };

  // Borrar una Tarea
  const deleteTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  // Toggle terminado
  const toggleTerminado = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, done: !tarea.done } : tarea
      )
    );
  };

  return (
    <div className="container">
      <Header
        titulo="Tareas"
        onAdd={() => setShowAddTarea(!showAddTarea)}
        showAdd={showAddTarea}
      />
      {showAddTarea && <AddTarea onAdd={addTarea} />}
      {tareas.length > 0 ? (
        <Tareas
          tareas={tareas}
          onDelete={deleteTarea}
          onToggle={toggleTerminado}
        />
      ) : (
        "No hay tareas para mostrar"
      )}
    </div>
  );
}

export default App;
