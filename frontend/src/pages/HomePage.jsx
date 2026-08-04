import { Link } from 'react-router-dom';

const highlights = [
  { title: 'Responsive UI', desc: 'Tailwind-based experience with a polished light/dark theme.' },
  { title: 'Secure Backend', desc: 'JWT auth, Spring Security, Hibernate, and layered API design.' },
  { title: 'Cloud Ready', desc: 'Docker, Compose, and EKS-friendly Kubernetes manifests included.' },
];

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-900 p-8 text-white shadow-2xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr,0.9fr] lg:items-center">
          <div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm">Three-tier SaaS demo</span>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">Hotel Booking Management System</h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Explore hotels, rooms, bookings, and admin workflows through a clean React frontend connected to a secure Spring Boot API and MySQL persistence tier.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/hotels" className="rounded bg-white px-4 py-2 font-semibold text-blue-700">Browse Hotels</Link>
              <Link to="/login" className="rounded border border-white/60 px-4 py-2">Login</Link>
              <Link to="/admin" className="rounded border border-white/60 px-4 py-2">Admin Dashboard</Link>
            </div>
          </div>
          <div className="grid gap-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
