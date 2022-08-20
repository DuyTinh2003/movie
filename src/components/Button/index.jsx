const Button = (props) => {
  return (
    <button
      className={`btn ${props.className || ""}`}
      onClick={props.onClick ? props.onClick : undefined}
    >
      {props.children}
    </button>
  );
};
export const OutLineButton = (props) => {
  return (
    <Button
      className={`btn outline-btn ${props.className || ""}`}
      onClick={props.onClick ? props.onClick : undefined}
    >
      {props.children}
    </Button>
  );
};

export default Button;
