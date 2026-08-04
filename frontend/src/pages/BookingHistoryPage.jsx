const bookings = [
  { id: 1, hotel: 'Grand Plaza', room: 'Deluxe Suite', status: 'Confirmed', total: '₹9000' },
  { id: 2, hotel: 'Ocean View', room: 'Premium Room', status: 'Completed', total: '₹6400' },
];

export default function BookingHistoryPage() {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
        <h1 className="text-3xl font-bold">Booking History</h1>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2">Booking ID</th>
                <th className="p-2">Hotel</th>
                <th className="p-2">Room</th>
                <th className="p-2">Status</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-2">#{booking.id}</td>
                  <td className="p-2">{booking.hotel}</td>
                  <td className="p-2">{booking.room}</td>
                  <td className="p-2">{booking.status}</td>
                  <td className="p-2">{booking.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
