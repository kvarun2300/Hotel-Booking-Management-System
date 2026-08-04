const metrics = [
  { label: 'Hotels', value: '24' },
  { label: 'Rooms', value: '148' },
  { label: 'Bookings', value: '386' },
  { label: 'Revenue', value: '₹8.4L' },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Hotel, room, booking, user, and reports management views.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded border p-4 dark:border-slate-700">
              <p className="text-sm text-slate-500">{metric.label}</p>
              <p className="mt-1 text-2xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded border p-4 dark:border-slate-700">
            <h2 className="font-semibold">Hotel Management</h2>
            <p className="mt-2 text-sm text-slate-500">Add, remove, update hotel inventory and property metadata.</p>
          </div>
          <div className="rounded border p-4 dark:border-slate-700">
            <h2 className="font-semibold">Booking Management</h2>
            <p className="mt-2 text-sm text-slate-500">Review live reservations, statuses, cancellations, and payment records.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
