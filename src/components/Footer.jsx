import { useDrink } from "../hooks/useDrink";
import Button from "../ui/Button";

export default function Footer() {
  const { orders, dispatchOrders, toggleResult } = useDrink();
  const total = orders
    .map((drink) => drink.amount)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <footer className="flex justify-between">
      <Button
        color="bg-red-700 text-stone-50"
        onClick={() => dispatchOrders({ type: "reset" })}
      >
        リセット
      </Button>
      {total > 0 && (
        <Button color="bg-stone-600 text-stone-50" onClick={toggleResult}>
          集計 →
        </Button>
      )}
    </footer>
  );
}
