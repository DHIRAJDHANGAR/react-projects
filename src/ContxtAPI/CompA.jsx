import { createContext, useState } from "react";

export const cityContext = createContext();
const CityNameProvider = cityContext.Provider;

const CompA = () => {
  const [city, setCity] = useState("");
  return (
    <CityNameProvider value={city}>
      <p>A</p>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <B />
    </CityNameProvider>
  );
};
export default CompA;
