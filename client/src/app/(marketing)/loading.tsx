export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="animate-pulse bg-gray-200 h-10 w-1/2 rounded"></div>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-64 rounded"></div>
        ))}
      </div>
    </div>
  );
}
