"use client";
import "./ActivityInput.scss";

export default function ActivityInput({ activity, setActivity }: { activity: string, setActivity: (val: string) => void }) {
  return (
    <input
      className="activity-input"
      type="text"
      placeholder="Activity"
      value={activity}
      onChange={(e) => setActivity(e.target.value)}
      required
    />
  );
}
