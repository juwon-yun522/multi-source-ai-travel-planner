"use client";

import { useState } from "react";

import Header from "./components/Header";
import TravelForm from "./components/TravelForm";
import PlaceInput from "./components/PlaceInput";
import PlaceList from "./components/PlaceList";
import GenerateButton from "./components/GenerateButton";

export default function Home() {
  const [city, setCity] = useState("");
  const [period, setPeriod] = useState("");
  const [hotel, setHotel] = useState("");
  const [arrivalFlight, setArrivalFlight] = useState("");
  const [departureFlight, setDepartureFlight] = useState("");
  const [placeInput, setPlaceInput] = useState("");
  const [places, setPlaces] = useState<string[]>([]);
  const [generatedPlan, setGeneratedPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addPlace = () => {
    if (!placeInput.trim()) return;

    setPlaces((prev) => [...prev, placeInput.trim()]);
    setPlaceInput("");
  };

  const handleGenerate = async () => {
    setLoading(true);
    setErrorMessage("");
    setGeneratedPlan("");

    try {
      const response = await fetch(
        "https://yunjw.app.n8n.cloud/webhook/generate-travel-plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            city,
            period,
            hotel,
            arrivalFlight,
            departureFlight,
            places,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.text();

      console.log(result);

      setGeneratedPlan(result);
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <Header />

        <TravelForm
          city={city}
          period={period}
          hotel={hotel}
          arrivalFlight={arrivalFlight}
          departureFlight={departureFlight}
          setCity={setCity}
          setPeriod={setPeriod}
          setHotel={setHotel}
          setArrivalFlight={setArrivalFlight}
          setDepartureFlight={setDepartureFlight}
        />

        <PlaceInput
          placeInput={placeInput}
          setPlaceInput={setPlaceInput}
          addPlace={addPlace}
        />

        <PlaceList places={places} />

        <GenerateButton
          onClick={handleGenerate}
          disabled={places.length === 0 || loading}
          loading={loading}
        />

        {errorMessage && (
          <section className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {errorMessage}
          </section>
        )}

        {generatedPlan && (
          <section className="mt-6 rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              생성된 여행 일정
            </h2>

            <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-700">
              {generatedPlan}
            </pre>
          </section>
        )}
      </div>
    </main>
  );
}
