function Button({
  text,
  onClick,
  type = "button",
  className = "btn btn-primary",
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;