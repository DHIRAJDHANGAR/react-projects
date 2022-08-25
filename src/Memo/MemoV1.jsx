import { memo } from "react";

const MyCard2 = ({ name }) => {
  console.log(name);
  return (
    <>
      <p>my name is {name}</p>
    </>
  );
};
// export default memo(MyCard2);

export default MyCard2;
