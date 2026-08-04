const profile = {
  name: 'Aarav Sharma',
  email: 'aarav@example.com',
  role: 'Customer',
  memberSince: '2025',
};

export default function ProfilePage() {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
        <h1 className="text-3xl font-bold">User Profile</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded border p-4 dark:border-slate-700">
            <p className="text-sm text-slate-500">Name</p>
            <p className="text-lg font-semibold">{profile.name}</p>
          </div>
          <div className="rounded border p-4 dark:border-slate-700">
            <p className="text-sm text-slate-500">Email</p>
            <p className="text-lg font-semibold">{profile.email}</p>
          </div>
          <div className="rounded border p-4 dark:border-slate-700">
            <p className="text-sm text-slate-500">Role</p>
            <p className="text-lg font-semibold">{profile.role}</p>
          </div>
          <div className="rounded border p-4 dark:border-slate-700">
            <p className="text-sm text-slate-500">Member Since</p>
            <p className="text-lg font-semibold">{profile.memberSince}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
