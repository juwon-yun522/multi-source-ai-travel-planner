type TravelFormProps = {
  city: string;
  period: string;
  hotel: string;
  arrivalFlight: string;
  departureFlight: string;
  setCity: (value: string) => void;
  setPeriod: (value: string) => void;
  setHotel: (value: string) => void;
  setArrivalFlight: (value: string) => void;
  setDepartureFlight: (value: string) => void;
};

export default function TravelForm({
  city,
  period,
  hotel,
  arrivalFlight,
  departureFlight,
  setCity,
  setPeriod,
  setHotel,
  setArrivalFlight,
  setDepartureFlight,
}: TravelFormProps) {
  return (
    <section className="space-y-4">
      <input className="w-full rounded-lg border p-3" placeholder="여행 도시 예: 도쿄" value={city} onChange={(e) => setCity(e.target.value)} />
      <input className="w-full rounded-lg border p-3" placeholder="여행 기간 예: 7월 10일 ~ 7월 14일" value={period} onChange={(e) => setPeriod(e.target.value)} />
      <input className="w-full rounded-lg border p-3" placeholder="숙소 예: 신주쿠 워싱턴 호텔" value={hotel} onChange={(e) => setHotel(e.target.value)} />
      <input className="w-full rounded-lg border p-3" placeholder="도착 비행기 예: 7/10 11:00 나리타 도착" value={arrivalFlight} onChange={(e) => setArrivalFlight(e.target.value)} />
      <input className="w-full rounded-lg border p-3" placeholder="출발 비행기 예: 7/14 18:00 하네다 출발" value={departureFlight} onChange={(e) => setDepartureFlight(e.target.value)} />
    </section>
  );
}
