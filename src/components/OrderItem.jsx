import { useDrink } from "../hooks/useDrink";
import Button from "../ui/Button";

const getDrinkColorClass = (type) => {
  switch (type) {
    case "alcohol":
      return "text-neutral-50 bg-yellow-800";
    case "nonAlcohol":
      return "text-neutral-50 bg-cyan-800";
    default:
      return "text-neutral-50 bg-neutral-400";
  }
};

export default function OrderItem({ drink }) {
  const { dispatchOrders } = useDrink();
  const color = getDrinkColorClass(drink.amount && drink.type);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {drink.amount === 0 && (
          <Button
            shape="rounded"
            color="text-neutral-50 bg-red-700 shrink-0"
            onClick={() =>
              dispatchOrders({
                type: "delete",
                payload: { name: drink.name },
              })
            }
          >
            ×
          </Button>
        )}
        <p className="text-lg">{drink.name}</p>
      </div>
      <div className="shrink-0 space-x-2">
        <Button
          shape="rounded"
          color={color}
          onClick={() =>
            dispatchOrders({
              type: "decrement",
              payload: { name: drink.name },
            })
          }
        >
          -
        </Button>
        <input
          type="text"
          name="amount"
          value={drink.amount}
          onChange={(e) =>
            dispatchOrders({
              type: "input",
              payload: { name: drink.name, amount: +e.target.value },
            })
          }
          className={`h-12 w-12 rounded-full text-center text-xl font-bold ${color}`}
        />
        <Button
          shape="rounded"
          color={color}
          onClick={() =>
            dispatchOrders({
              type: "increment",
              payload: { name: drink.name },
            })
          }
        >
          +
        </Button>
      </div>
    </div>
  );
}
