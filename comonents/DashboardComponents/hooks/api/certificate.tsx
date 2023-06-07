import { useEffect, useState } from "react";
export const useFetcher = (args) => fetch(args).then((res) => res.json());
export const useFetch = (url) => {
  const [certificateData, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setdata(data);
        setloading(false);
      });
  }, [url]);

  return { certificateData, loading, error };
};

export const findMaxNumber = (certificate: any[]) => {
  let maxnumber =
    certificate &&
    certificate
      .map((max: { certificate_number: any }) => max.certificate_number)
      .sort((a, b) => b - a);
  let convertMaxNumberTostring = maxnumber && maxnumber[0]?.toString();
  if (
    convertMaxNumberTostring === undefined ||
    convertMaxNumberTostring === null
  ) {
    convertMaxNumberTostring = "999";
  }
  let max = parseInt(convertMaxNumberTostring) + 1;
  let convertToatring = max.toString();
  return convertToatring;
};
