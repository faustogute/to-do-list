import Header from "./components/Header";
import Tareas from "./components/Tareas";

function App() {
  return (
    <div className="container">
      <Header titulo="Tareas" />
      <Tareas />
    </div>
  );
}

export default App;
