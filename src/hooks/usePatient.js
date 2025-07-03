import { useEffect, useState } from "react";
import { API_URL, API_HEADERS } from "../constants/api";

export function usePatients() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL, {
      headers: API_HEADERS,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(setPatients)
      .catch((err) => setError(err));
  }, []);

  return { patients, error };
}
