import { useState } from "react";

async function sendHttpRequst(url, config) {
  fetch(url, config);
  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const responseData = await response.json();

  return responseData;
}

export default function useHttp() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  async function sendRequest(url, config) {
    setIsLoading(true);
    try {
      const responseData = await sendHttpRequst(url, config);
      setData(responseData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
