import { cityContext } from "./CompA";

const CompC = () => {
  const city = useContext(cityContext);
  return (
    <>
      <p>C</p>
      <D />
    </>
  );
};

export default CompC;
