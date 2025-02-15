"use client";
import "./BookingCheckbox.scss";

export default function BookingCheckbox({ bookingRequired, setBookingRequired }: { bookingRequired: boolean, setBookingRequired: (val: boolean) => void }) {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={bookingRequired}
        onChange={(e) => setBookingRequired(e.target.checked)}
      />
      Booking Required
    </label>
  );
}
