import Perfil from "./components/Perfil";

function App() {
  function functionReturn() {
    return "This is a function nameReturn";
  }

  // abaixo sao  exemplos de estado local.
  // Variaveis declaradas dentro da funcao do componente.
  let itsMorning = true;
  const name = "Artur";
  const person = {
    name: "Sarah",
  };

  // aqui no retorno, estou usando propriedades para passar dados
  // para outros componentes ou
  // para renderizar diretamentes no DOM.
  return (
    // <> ... </> sintexe de fragmento, para retornar varios elementos
    <>
      {/* 'Perfil' é um componente que esta sendo renderizado */}
      <Perfil />
      {/* 'name' e 'person.name' sao propriedades */}
      <h1>Olá {name}</h1>
      <h1>Olá {person.name}</h1>
      <h1>Olá {functionReturn()}</h1>
      <p>Mais um projetinho se inicia...</p>
      <hr />
      {/* renderizacao condicional */}
      {itsMorning === true ? "Bom dia!" : "Boa tarde!"} <br />
      {itsMorning ? "Bom dia!" : "Boa tarde!"} <br />
      {itsMorning && "Bom dia!"} <br />
    </>
  );
}
// Foi demonstrado componentes funcionais, estado local e condicionais.
export default App;
