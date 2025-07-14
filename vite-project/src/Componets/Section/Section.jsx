import { useState } from "react";
import "./Section.css";

export function SectionComponent() {
  const [tarefa, setTarefa] = useState("");
  const [info, setInfo] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaTarefa = {
      id: Date.now(),
      titulo: tarefa,
      descricao: info,
      status: "Pendente"
    };

    setListaTarefas([...listaTarefas, novaTarefa]);
    setTarefa("");
    setInfo("");
  };

  const atualizarStatus = (id, novoStatus) => {
    const tarefasAtualizadas = listaTarefas.map((t) =>
      t.id === id ? { ...t, status: novoStatus } : t
    );
    setListaTarefas(tarefasAtualizadas);
  };

  return (
    <section className="section">
      <div className="conteudo">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="alinhar input"
          type="text"
          placeholder="Adicionar Tarefa"
          required
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <textarea
          className="alinhar"
          placeholder="Informações sobre a tarefa"
          required
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <button className="alinhar" type="submit">Enviar</button>
      </form>

      <div className="lista-tarefas">
        {listaTarefas.map((tarefa) => (
          <div key={tarefa.id} className="tarefa-item">
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.descricao}</p>
            <select
              value={tarefa.status}
              onChange={(e) => atualizarStatus(tarefa.id, e.target.value)}
            >
              <option value="Pendente">Pendente</option>
              <option value="Concluído">Concluído</option>
            </select>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
