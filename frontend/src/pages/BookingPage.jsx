import { useState } from 'react';

export default function BookingPage() {
  const [booking, setBooking] = useState({ checkIn: '', checkOut: '', guests: 2 });

  const nights = Math.max(1, Math.ceil((new Date(booking.checkOut) - new Date(booking.checkIn)) / (1000 * 60 * 60 * 24)) || 1);
  const total = nights * 4500;

  return (
    <div className="p-6">
      <div className="mx-auto grid max-w-5xl gap-6 rounded-2xl bg-white p-6 shadow md:grid-cols-[1fr,1fr] dark:bg-slate-900">
        <div>
          <h1 className="text-3xl font-bold">Booking</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Reserve your preferred room with transparent pricing and date validation.</p>
          <div className="mt-6 space-y-4">
            <input type="date" value={booking.checkIn} onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })} className="w-full rounded border p-2" />
            <input type="date" value={booking.checkOut} onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })} className="w-full rounded border p-2" />
            <select value={booking.guests} onChange={(e) => setBooking({ ...booking, guests: Number(e.target.value) })} className="w-full rounded border p-2">
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
            </select>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
          <h2 className="text-xl font-semibold">Booking Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Nightly Rate</span><span>₹4500</span></div>
            <div className="flex justify-between"><span>Stay Duration</span><span>{nights} nights</span></div>
            <div className="flex justify-between"><span>Guests</span><span>{booking.guests}</span></div>
            <div className="mt-4 border-t pt-3 text-base font-semibold"><span>Total Amount</span><span>₹{total}</span></div>
          </div>
          <button className="mt-6 w-full rounded bg-blue-600 px-4 py-2 text-white">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}
