const CountNumberV2 = ({ count, setCount }) => {
  const countNumber2 = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>countnum: {count}</div>
      <button onClick={countNumber2}>countnum2</button>
    </>
  );
};
export default CountNumberV2;
