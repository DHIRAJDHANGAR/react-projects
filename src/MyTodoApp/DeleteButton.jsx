import { Button } from "reactstrap";

const DeleteButton = ({ label, onClick }) => {
  return (
    <Button
      style={{
        width: "70px",
        fontSize: "12px",
        border: "2px solid rgb(249, 44, 82)",
        borderRadius: "20px 0 20px 0",
        backGroundColor: "rgb(16, 16, 16)",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
export default DeleteButton;
