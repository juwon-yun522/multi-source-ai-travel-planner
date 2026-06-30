type PlaceListProps = {
  places: string[];
};

export default function PlaceList({ places }: PlaceListProps) {
  return (
    <section className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        등록된 장소 리스트
      </h2>

      {places.length === 0 ? (
        <p className="text-sm text-gray-500">
          아직 등록된 장소가 없습니다.
        </p>
      ) : (
        <ul className="space-y-2">
          {places.map((place, index) => (
            <li
              key={`${place}-${index}`}
              className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-800"
            >
              <span className="mr-2 font-medium text-gray-500">
                {index + 1}.
              </span>
              {place}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
