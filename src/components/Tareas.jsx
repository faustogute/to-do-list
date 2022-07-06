const tareas = [
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
];

const Tareas = () => {
  return (
    <>
      {tareas.map((tarea) => (
        <h3 key={tarea.id}>{tarea.texto}</h3>
      ))}
    </>
  );
};

export default Tareas;
