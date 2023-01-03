import React from "react";

const defaultValue = {
  locale: "en-US",
  setLocale: (e) => {},
};

export default React.createContext(defaultValue);
