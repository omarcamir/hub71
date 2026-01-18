export default function Loading() {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="h-6 w-48 bg-gray-200 animate-pulse rounded" />
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
        <div className="lg:col-span-2 h-80 bg-gray-200 animate-pulse rounded-lg" />
      </div>
    </div>
  );
}
