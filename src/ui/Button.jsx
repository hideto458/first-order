export default function Button({
  shape = "normal",
  color,
  onClick,
  children,
  type = "submit",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-center text-lg ${color} ${
        shape === "rounded"
          ? "h-8 w-8 rounded-full"
          : shape === "square"
            ? "h-8 w-8 rounded-sm"
            : "rounded-md px-3 py-1"
      }`}
    >
      {children}
    </button>
  );
}
