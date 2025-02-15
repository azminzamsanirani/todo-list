"use client";
import { useState, useEffect } from "react";
import { Task } from "@/utils/Types";
import ActivityInput from "@/components/ActivityInput";
import PriceInput from "@/components/PriceInput";
import TypeSelect from "@/components/TypeSelect";
import BookingCheckbox from "@/components/BookingCheckbox";
import AccessibilitySlider from "@/components/AccessibilitySlider";
import TodoList from "@/components/TodoList";
import TodoSummary from "@/components/TodoSummary";
import "./page.scss";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("education");
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  useEffect(() => {
    const savedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = { activity, price: parseFloat(price), type, bookingRequired, accessibility };
    setTasks([...tasks, newTask]);
    setActivity("");
    setPrice("");
    setType("education");
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <ActivityInput activity={activity} setActivity={setActivity} />
        <PriceInput price={price} setPrice={setPrice} />
        <TypeSelect type={type} setType={setType} />
        <BookingCheckbox bookingRequired={bookingRequired} setBookingRequired={setBookingRequired} />
        <AccessibilitySlider accessibility={accessibility} setAccessibility={setAccessibility} />
        <button type="submit">Add Task</button>
      </form>

      <TodoSummary tasks={tasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
