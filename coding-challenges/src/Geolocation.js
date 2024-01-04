import { useState } from "react";

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  // const { lat, lng } = position;

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
}

export default function Geolocation() {
  const [countClicks, setCountClicks] = useState(0);

  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocation();

  function handleclick() {
    getPosition();
    setCountClicks((count) => count + 1);
  }

  return (
    <div>
      <button onClick={handleclick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <div>Loading position...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && lat && lng && (
        <div>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </div>
      )}

      <div>You requested position {countClicks} times</div>
    </div>
  );
}
