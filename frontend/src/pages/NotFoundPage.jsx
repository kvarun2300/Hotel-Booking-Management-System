import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="rounded-2xl bg-white p-8 text-center shadow dark:bg-slate-900">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">The page you requested could not be found.</p>
        <Link to="/" className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white">Back Home</Link>
      </div>
    </div>
  );
}
