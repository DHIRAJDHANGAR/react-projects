import { useEffect, useMemo, useState } from "react";

const FilterAPI = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const result = useMemo(() => {});

  return (
    <div>
      {data.filter((item) => {
        return (
          <ul key={item.id}>
            <li> Title : {item.title}</li>
            <li> Rating : {item.rating.rate}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default FilterAPI;
