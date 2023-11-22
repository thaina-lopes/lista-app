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

  const removeDaLista = (item) => {
    const novaListaSemItemRemovido = lista.filter(
      (itemDaLista) => itemDaLista !== item
    );

    setLista(novaListaSemItemRemovido);
  };

  return (
    <div>
      <h1>Lista App</h1>
      <ul>
        {lista.map((item) => (
          <div key={item}>
            <li>{item}</li>
            <button onClick={() => removeDaLista(item)}>Excluir</button>
          </div>
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
