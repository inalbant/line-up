type ButtonProps = {
  onClick?: () => void;
  increment?: boolean;
};

export function Button({ increment, onClick }: ButtonProps) {
  return (
    <input
      className="py-2 px-4 rounded-full bg-blue-300 hover:opacity-50 cursor-pointer"
      onClick={onClick}
      type="button"
      value={increment ? "+" : "-"}
    ></input>
  );
}
