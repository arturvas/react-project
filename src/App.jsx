import Perfil from "./components/Perfil";

function App() {
  const name = "Artur";

  function functionReturn() {
    return "This is a function nameReturn";
  }

  const person = {
    name: "Sarah",
  };

  let itsMorning = true;

  return (
    <>
      <Perfil />
      <h1>Olá {name}</h1>
      <h1>Olá {functionReturn()}</h1>
      <h1>Olá {person.name}</h1>
      <p>Mais um projetinho se inicia...</p>
      <hr />
      {itsMorning === true ? "Bom dia!" : "Boa tarde!"} <br />
      {itsMorning ? "Bom dia!" : "Boa tarde!"} <br />
      {itsMorning && "Bom dia!"} <br />
    </>
  );
}

export default App;
