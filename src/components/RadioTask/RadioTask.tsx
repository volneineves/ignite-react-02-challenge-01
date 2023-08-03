import { Check, Circle, Trash } from "phosphor-react";
import styles from "./RadioTask.module.css";

interface ITask {
  id: string;
  isChecked?: boolean;
  message: string;
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string) => void;
}

export function RadioTask({
  id,
  isChecked,
  message,
  onDeleteTask,
  onCheckTask,
}: ITask) {
  const handleCheck = () => {
    onCheckTask(id);
  };

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      {isChecked ? (
        <>
          <Check
            size={24}
            className={styles.radioChecked}
            onClick={handleCheck}
          />
          <p>
            <s>{message}</s>
          </p>
        </>
      ) : (
        <>
          <Circle
            size={24}
            className={styles.radioCircle}
            onClick={handleCheck}
          />
          <p>{message}</p>
        </>
      )}

      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
