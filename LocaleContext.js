import React from "react";

const defaultValue = {
  locale: "en",
  setLocale: (e) => {},
};

export default React.createContext(defaultValue);
