const room = {
  id: 101,
  roomType: 'Deluxe Suite',
  price: 4500,
  capacity: 2,
  availability: true,
  imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
};

export default function RoomDetailsPage() {
  return (
    <div className="p-6">
      <div className="mx-auto grid max-w-5xl gap-6 rounded-2xl bg-white p-6 shadow md:grid-cols-[1fr,1fr] dark:bg-slate-900">
        <img src={room.imageUrl} alt={room.roomType} className="h-72 w-full rounded-xl object-cover" />
        <div>
          <h1 className="text-3xl font-bold">{room.roomType}</h1>
          <p className="mt-2 text-slate-500">Capacity: {room.capacity} guests</p>
          <p className="mt-3 text-lg font-semibold">₹{room.price}/night</p>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Elegant interiors, premium bed setup, smart room controls, and curated room service available around the clock.
          </p>
          <div className="mt-4 flex gap-3">
            <span className="rounded bg-emerald-100 px-3 py-1 text-sm text-emerald-700">{room.availability ? 'Available' : 'Booked'}</span>
            <a href="/booking" className="rounded bg-blue-600 px-3 py-2 text-sm text-white">Reserve Room</a>
          </div>
        </div>
      </div>
    </div>
  );
}
