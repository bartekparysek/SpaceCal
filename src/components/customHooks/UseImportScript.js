import { useState, useEffect } from "react";
import { useInterval } from "./UseInterval";

export function useImportScript(url, delay = 500) {
  const [isLoaded, setIsLoaded] = useState(false);

  useInterval(() => {
    setIsLoaded(true);
  }, delay);

  useEffect(() => {
    if (isLoaded) {
      const script = document.createElement("script");
      script.src = url;
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [url, isLoaded]);
}
