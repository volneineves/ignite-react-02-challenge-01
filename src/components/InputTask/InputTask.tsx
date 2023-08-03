import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./InputTask.module.css";

interface IInputTask {
  onAddTask: (message: string) => void;
}

export function InputTask({ onAddTask }: IInputTask) {
  const [message, setMessage] = useState("");

  const handleCreateNewTask = () => {
    if (!message.trim()) {
      const inputElement = document.querySelector("input[name='task']");
      if (inputElement instanceof HTMLInputElement) {
        inputElement.setCustomValidity("Esse texto é obrigatório");
        inputElement.reportValidity();
      }
    } else {
      onAddTask(message);
      setMessage("");
    }
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className={styles.inputTask}>
      <input
        name="task"
        onChange={handleNewCommentChange}
        placeholder="Adicione uma nova tarefa"
        value={message}
        required
      />
      <button onClick={handleCreateNewTask} type="submit">
        <p>Criar</p> <PlusCircle size={16} />
      </button>
    </div>
  );
}
