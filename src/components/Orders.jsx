import { useDrink } from "../hooks/useDrink";
import OrderItem from "./OrderItem";

export default function Orders() {
  const { orders } = useDrink();

  return (
    <main className="space-y-6 overflow-scroll bg-neutral-50/80 px-[min(2rem,4vw)] py-5 shadow-md scrollbar-none">
      {orders.length > 0 ? (
        orders.map((drink) => <OrderItem drink={drink} key={drink.name} />)
      ) : (
        <p className="mt-12 text-center text-lg">
          メニューから飲み物を選んでね🍻
        </p>
      )}
    </main>
  );
}
