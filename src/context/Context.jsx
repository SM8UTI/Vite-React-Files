import React from "react";

const AppContext = React.createContext();

const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ child }) => {
  return (
    <AppContext.Provider value={{ name: "lol" }}>{child}</AppContext.Provider>
  );
};

export { AppContext, AppProvider, useGlobalContext };
