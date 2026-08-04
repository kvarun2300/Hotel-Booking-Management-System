const hotel = {
  id: 1,
  hotelName: 'Grand Plaza',
  city: 'Mumbai',
  country: 'India',
  address: 'Marine Drive, Mumbai',
  rating: 4.8,
  description: 'A luxury urban retreat offering panoramic sea views, curated dining, wellness amenities, and business-grade services.',
  rooms: ['Deluxe', 'Suite', 'Executive'],
};

export default function HotelDetailsPage() {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
        <h1 className="text-3xl font-bold">{hotel.hotelName}</h1>
        <p className="mt-1 text-slate-500">{hotel.address}, {hotel.city}, {hotel.country}</p>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{hotel.description}</p>
        <div className="mt-4 flex gap-2">
          <span className="rounded bg-amber-100 px-3 py-1 text-sm text-amber-700">★ {hotel.rating}</span>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {hotel.rooms.map((room) => (
            <div key={room} className="rounded border p-4 dark:border-slate-700">
              <h3 className="font-semibold">{room}</h3>
              <p className="mt-2 text-sm text-slate-500">Available for instant booking</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
