import { useState } from "react";
import "./Section.css";

export function SectionComponent() {
  const [tarefa, setTarefa] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tarefa:", tarefa);
    console.log("Informações:", info);
    // Aqui você pode limpar ou enviar para um backend
    setTarefa("");
    setInfo("");
  };

  return (
    <section className="section">
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="alinhar input"
          type="text"
          id="text"
          placeholder="Adicionar Tarefa"
          required
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <textarea className="alinhar"
          id="message"
          placeholder="Informações sobre a tarefa"
          required
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <button className="alinhar" type="submit">Enviar</button>
      </form>
    </section>
  );
}


