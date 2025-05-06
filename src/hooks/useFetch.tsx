import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>({});
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.conversion_rates);
      } catch (err) {
        setErr("Error fetching exchange rates");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // clean up
    return () => {};
  }, [url]);

  return { data, err, loading };
};
