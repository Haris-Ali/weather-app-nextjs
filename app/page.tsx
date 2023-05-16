"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./(components)/SearchBar";
import { useState, useEffect, useCallback } from "react";
import WeatherData from "./(components)/WeatherData";

export default function Home() {
  const [value, setValue] = useState<any>();
  const [showResult, setShowResult] = useState<boolean>();
  const [error, setError] = useState<any>(false);

  const handleCallback = useCallback((city: any) => {
    fetch(
      `${process.env.API_BASE_URL}/current.json?key=${process.env.API_KEY}&q=${city}&aqi=no`
    )
      .then((response) => {
        if (!response.ok) {
          toast.error("API Request Failed");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.error) {
          setShowResult(true);
          setError(data.error.message);
          toast.error(data.error.message);
        }
        if (data && data.location && data.current) {
          setValue(data);
          setShowResult(true);
        } else {
          setValue({});
          setShowResult(false);
        }
      });
  }, []);

  return (
    <main className="p-5 pt-2">
      <div className="container flex items-center">
        <div className="search-container w-full sm:w-auto">
          <SearchBar callback={handleCallback} />
        </div>
      </div>
      {value ? <WeatherData data={value} /> : null}
      <ToastContainer />
    </main>
  );
}
