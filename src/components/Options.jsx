import { drinks } from "../data/drinks";
import { useDrink } from "../hooks/useDrink";
import OptionItem from "./OptionItem";

export default function Options() {
  const { orders } = useDrink();

  const options = drinks.filter(
    (drink) => !orders.map((ordered) => ordered.name).includes(drink.name),
  );

  const other = { name: "その他", type: "other" };

  return (
    <section className="scrollbar-none overflow-scroll">
      <ul className="grid grid-cols-3 gap-2">
        {[...options, other].map((drink) => (
          <OptionItem drink={drink} key={drink.name} />
        ))}
      </ul>
    </section>
  );
}
