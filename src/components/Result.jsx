import { useDrink } from "../hooks/useDrink";
import Button from "../ui/Button";

export default function Result() {
  const { orders, toggleResult } = useDrink();

  const total = orders
    .map((drink) => drink.amount)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="fixed inset-0 grid place-content-center bg-stone-900/75">
      <div className="flex min-h-[40dvh] w-[80vw] max-w-[28rem] flex-col gap-6 rounded-lg bg-stone-100 px-[4vw] pb-6 pt-4">
        <div className="text-right">
          <Button
            shape="square"
            onClick={(e) => {
              e.preventDefault();
              toggleResult();
            }}
            color="text-white bg-stone-400"
          >
            ×
          </Button>
        </div>

        <ul className="space-y-4">
          {orders
            .toSorted((a, b) => (a.type < b.type ? -1 : 1))
            .map((drink) => (
              <li
                key={drink.name}
                className={`flex items-center justify-between gap-4 border-b ${drink.type === "alcohol" ? "border-yellow-400" : "border-cyan-400"}`}
              >
                <span className="text-lg">{drink.name}</span>
                <span className="shrink-0 text-2xl">× {drink.amount}</span>
              </li>
            ))}
        </ul>
        <div className="mr-4 mt-auto text-right text-2xl">合計 {total}杯</div>
      </div>
    </div>
  );
}
