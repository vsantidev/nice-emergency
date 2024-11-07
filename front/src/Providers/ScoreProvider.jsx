import { createContext, useState, useContext } from "react";

// 1. Create the Context
const ScoreContext = createContext();

// 2. Create a Provider component
export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// 3. Custom hook for consuming the context
export const useScore = () => useContext(ScoreContext);