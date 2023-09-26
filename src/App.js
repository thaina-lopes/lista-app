import { useState } from "react";

function App() {
  const [lista, setLista] = useState([
    "criar a listagens de todos",
    "blablabla",
  ]);

  const [novoItem, setNovoItem] = useState("");

  const adicionarNaLista = (item) => {
    setLista([...lista, item]);
    setNovoItem("");
  };

  return (
    <div>
      <h1>Lista App</h1>
      <ul>
        {lista.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        value={novoItem}
        onChange={(event) => setNovoItem(event.target.value)}
      />

      <button onClick={() => adicionarNaLista(novoItem)}>Adicionar</button>
    </div>
  );
}

export default App;
