import { useEffect, useState } from 'react';
import api from '../api/client';
import toast from 'react-hot-toast';

const sampleHotels = [
  { id: 1, hotelName: 'Grand Plaza', city: 'Mumbai', country: 'India', description: 'Luxury waterfront stay with premium dining and rooftop views.', rating: 4.8 },
  { id: 2, hotelName: 'Ocean View', city: 'Goa', country: 'India', description: 'Beachfront resort tailored for family and couple vacations.', rating: 4.6 },
  { id: 3, hotelName: 'Skyline Suites', city: 'Delhi', country: 'India', description: 'Business-friendly hotel with executive lounge and airport transfers.', rating: 4.7 },
];

export default function HotelsPage() {
  const [hotels, setHotels] = useState(sampleHotels);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const response = await api.get('/hotels');
        if (response.data?.data?.length) {
          setHotels(response.data.data);
        }
      } catch (error) {
        toast.error('Unable to load hotels from backend, using sample data');
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const filteredHotels = hotels.filter((hotel) =>
    `${hotel.hotelName} ${hotel.city} ${hotel.country}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Hotels</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Search and filter hotel options across major cities.</p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hotel or city"
            className="rounded border px-4 py-2 dark:bg-slate-800"
          />
        </div>
        {loading ? <p className="mt-4">Loading hotels...</p> : null}
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="rounded-2xl border p-4 shadow-sm dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{hotel.hotelName}</h2>
                  <p className="text-sm text-slate-500">{hotel.city}, {hotel.country}</p>
                </div>
                <span className="rounded bg-amber-100 px-2 py-1 text-sm text-amber-700">★ {hotel.rating || '4.5'}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{hotel.description}</p>
              <div className="mt-4 flex gap-3">
                <a href={`/hotels/${hotel.id}`} className="rounded bg-blue-600 px-3 py-2 text-sm text-white">View Details</a>
                <a href={`/booking`} className="rounded border px-3 py-2 text-sm">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
