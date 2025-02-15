"use client";
import "./AccessibilitySlider.scss";

export default function AccessibilitySlider({ 
  accessibility, 
  setAccessibility 
}: { accessibility: number; setAccessibility: (val: number) => void }) {
  return (
    <div className="slider-container">
      <label htmlFor="accessibility-slider">
        Accessibility: <span className="slider-value">{accessibility.toFixed(1)}</span>
      </label>
      <input
        id="accessibility-slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={accessibility}
        onChange={(e) => setAccessibility(parseFloat(e.target.value))}
      />
    </div>
  );
}
