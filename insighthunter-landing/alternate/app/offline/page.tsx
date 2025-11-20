export default function Offline() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">You're Offline</h1>
      <p className="text-gray-600 mb-8">Your last insights are still available below.</p>
      <div className="bg-gray-100 p-6 rounded-xl w-full max-w-md">
        <p className="font-semibold">Last Report (Cached)</p>
        <p className="text-sm text-gray-500">Updated 2 hours ago</p>
      </div>
    </div>
  );
}
