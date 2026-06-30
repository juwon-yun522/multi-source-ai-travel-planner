type GenerateButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function GenerateButton({
  onClick,
  disabled = false,
  loading = false,
}: GenerateButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      {loading ? "일정 생성 중..." : "일정 생성"}
    </button>
  );
}
