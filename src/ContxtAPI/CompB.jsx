import { cityContext } from "./CompA";

const CompB = () => {
  const city = useContext(cityContext);
  return (
    <>
      <p>B : {city}</p>
      <C />
    </>
  );
};

export default CompB;
