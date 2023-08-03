import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { InputTask } from "./components/InputTask/InputTask";
import { RadioTask } from "./components/RadioTask/RadioTask";
import "./global.css";

import { v4 } from "uuid";

interface ITask {
  id: string;
  isChecked?: boolean;
  message: string;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: v4(),
      isChecked: true,
      message:
        "Adipisicing quis officia officia sunt velit minim do aliquip pariatur nisi tempor proident nisi esse.",
    },
    {
      id: v4(),
      isChecked: false,
      message:
        "Magna non ex incididunt occaecat ex nostrud officia duis.Ipsum esse in reprehenderit tempor ut mollit sint officia Lorem. Pariatur eu consectetur nisi ipsum dolor ea adipisicing labore nostrud non minim labore nisi sint. Reprehenderit nisi nostrud aliqua eu consectetur occaecat qui. Culpa aliquip id fugiat sit exercitation ullamco tempor veniam tempor ad aliqua tempor exercitation. Cillum minim do irure nisi consequat occaecat aute ipsum adipisicing veniam nulla sit. Sunt in ipsum laborum ullamco esse. Est culpa magna anim mollit enim aliquip.",
    },
  ]);

  const totalTasks = tasks.length;
  const totalTasksChecked = tasks.filter((task) => task.isChecked).length;

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  function addTask(message: string) {
    setTasks((tasks) => [...tasks, { id: v4(), isChecked: false, message }]);
  }

  function checkTask(id: string) {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
    });
    setTasks([...tasks]);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <InputTask onAddTask={addTask} />

          <div className={styles.taskBoard}>
            <div className={styles.taskTitle}>
              <p>Tarefas criadas</p>
              <p>
                Concluídas{" "}
                <span>
                  {totalTasksChecked} de {totalTasks}
                </span>
              </p>
            </div>

            <div className={styles.taskList}>
              {tasks.map((task) => {
                return (
                  <RadioTask
                    key={task.id}
                    id={task.id}
                    onCheckTask={checkTask}
                    isChecked={task.isChecked}
                    message={task.message}
                    onDeleteTask={deleteTask}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
