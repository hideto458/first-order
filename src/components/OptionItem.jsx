import { useDrink } from "../hooks/useDrink";

export default function OptionItem({ drink }) {
  const { dispatchOrders, toggleModal } = useDrink();

  const color =
    drink.type === "alcohol"
      ? "bg-yellow-800"
      : drink.type === "nonAlcohol"
        ? "bg-cyan-800"
        : "bg-neutral-400";

  return (
    <li
      className={`${
        color
      } grid h-20 cursor-pointer place-content-center rounded-lg p-2 text-center text-sm text-neutral-50`}
      onClick={() => {
        if (drink.type === "other") toggleModal();
        else dispatchOrders({ type: "add", payload: drink });
      }}
    >
      {drink.name}
    </li>
  );
}
