"use client";
import "./PriceInput.scss";

export default function PriceInput({ price, setPrice }: { price: string, setPrice: (val: string) => void }) {
  return (
    <input
      className="price-input"
      type="number"
      placeholder="Price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      required
    />
  );
}
