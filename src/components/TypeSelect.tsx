"use client";
import "./TypeSelect.scss";

const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];

export default function TypeSelect({ type, setType }: { type: string, setType: (val: string) => void }) {
  return (
    <select value={type} onChange={(e) => setType(e.target.value)}>
      {types.map((t) => (
        <option key={t} value={t}>{t}</option>
      ))}
    </select>
  );
}
