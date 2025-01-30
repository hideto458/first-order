import { useEffect, useState } from "react";
import Toggle from "../ui/Toggle";
import { useDrink } from "../hooks/useDrink";
import Button from "../ui/Button";

export default function Modal() {
  const { orders, dispatchOrders, toggleModal } = useDrink();
  const [isAlcohol, setIsAlcohol] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => document.querySelector("#name").focus(), []);

  return (
    <div className="fixed inset-0 grid place-content-center bg-stone-900/75">
      <form
        onSubmit={(e) => {
          setError(null);
          e.preventDefault();
          const form = new FormData(e.target);
          const data = Object.fromEntries(form);
          if (data.name === "") return;
          if (orders.map(({ name }) => name).includes(data.name)) {
            setError("すでに選択済みの名前です。");
            return;
          }

          const newDrink = {
            ...data,
            type: data?.alcohol === "on" ? "alcohol" : "nonAlcohol",
            amount: 1,
          };
          dispatchOrders({ type: "add", payload: newDrink });
          toggleModal();
        }}
        className="flex w-[80vw] max-w-[28rem] flex-col gap-6 rounded-lg bg-stone-100 px-[4vw] py-4 text-lg"
      >
        <div className="text-right">
          <Button
            shape="square"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            color="text-white bg-stone-400"
          >
            ×
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">ドリンク名</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="px-3 py-2 text-lg"
          />
          {error && <p className="text-sm text-red-700">{error}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="alcohol">アルコール</label>
          <Toggle name="alcohol" value={isAlcohol} handler={setIsAlcohol} />
        </div>
        <div className="text-center">
          <Button type="submit" color="text-stone-50 bg-stone-700">
            OK
          </Button>
        </div>
      </form>
    </div>
  );
}
