import axios from "axios";

export const fetchUserData = async (setData) => {
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  try {
    await fetch(`${APP_URL}/users`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  } catch (e) {
    console.log("Error fetching user data");
  }
};
export const fetchCertificateData = async (setData) => {
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  try {
    await axios
      .get(`${APP_URL}/certificates`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setData(data);
      });
  } catch (e) {
    console.log("Failed to fetch certificate");
  }
};
