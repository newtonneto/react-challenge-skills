type Props = {
  value: string;
  color: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  const { value, color, onClick } = props;

  return (
    <button
      onClick={onClick}
      style={{
        width: 200,
        height: 40,
        marginTop: 8,
        marginLeft: 16,
        backgroundColor: "white",
        borderRadius: 4,
        borderColor: color,
        color: color,
      }}
    >
      {value}
    </button>
  );
};

export default Button;
