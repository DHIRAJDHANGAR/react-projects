import { useParams } from "react-router-dom";

const PathParamsV2 = () => {
  const { id, myname, myusername } = useParams();
  console.log("LN5: ", { id, myname, myusername });
  return (
    <>
      <div key={id}>
        <p>My name is {myname}</p>
        <p>My User Name {myusername}</p>
      </div>
    </>
  );
};

export default PathParamsV2;
