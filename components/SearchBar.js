import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?location=${location}&dates=${dates}`);
    if (window.analytics) {
      window.analytics.track("Searched Availability", { location, dates });
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      />
      <button type="submit">Check Availability</button>
    </form>
  );
}
