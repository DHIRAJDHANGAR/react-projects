import { Input } from "reactstrap";

const InputText = ({
  type = "text",
  value,
  onTextChange,
  placeholder = "Enter text",
  name,
}) => {
  return (
    <Input
      style={{
        border: "2px solid rgb(5, 248, 228)",
        borderRadius: "20px 0 20px 0 ",
        height: "8vh",
      }}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        onTextChange(e);
      }}
      name={name}
    />
  );
};
export default InputText;
