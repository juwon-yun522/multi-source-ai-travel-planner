type PlaceInputProps = {
  placeInput: string;
  setPlaceInput: (value: string) => void;
  addPlace: () => void;
};

export default function PlaceInput({
  placeInput,
  setPlaceInput,
  addPlace,
}: PlaceInputProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-600">
        장소명, 블로그 URL, YouTube URL을 여러 개 입력할 수 있습니다.
      </p>

      <div className="flex gap-2">
        <input
          className="flex-1 rounded-lg border p-3"
          placeholder="예: 센소지 / https://m.blog.naver.com/... / https://youtube.com/..."
          value={placeInput}
          onChange={(e) => setPlaceInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addPlace();
          }}
        />

        <button
          onClick={addPlace}
          className="rounded-lg bg-black px-4 py-3 text-white"
        >
          추가
        </button>
      </div>
    </div>
  );
}
