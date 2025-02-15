"use client";
import { Task } from "@/utils/Types";
import "./TodoSummary.scss";

export default function TodoSummary({ tasks }: { tasks: Task[] }) {
  return <h2 className="todo-summary">Total Tasks: {tasks.length}</h2>;
}
