"use client";
import { Task } from "@/utils/Types";
import "./TodoList.scss";

export default function TodoList({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: (val: Task[]) => void;
}) {
  return (
    <div className="todo-list-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Price ($)</th>
            <th>Type</th>
            <th>Booking Required</th>
            <th>Accessibility</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.activity}</td>
              <td>${task.price}</td>
              <td>{task.type}</td>
              <td>{task.bookingRequired ? "Yes" : "No"}</td>
              <td>{task.accessibility}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
