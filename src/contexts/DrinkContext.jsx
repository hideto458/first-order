import { useReducer } from "react";
import { DrinkContext } from "../hooks/useDrink";

const orderReducer = (state, action) => {
  const drinkName = action?.payload?.name;
  const newAmount = action?.payload?.amount;

  const updateOrderAmount = (state, name, updater) =>
    state.map((order) =>
      order.name === name ? { ...order, amount: updater(order.amount) } : order,
    );

  switch (action.type) {
    case "add":
      return [...state, { ...action.payload, amount: 1 }];
    case "delete":
      return state.filter(({ name }) => name !== drinkName);
    case "increment":
      return updateOrderAmount(state, drinkName, (amount) => amount + 1);
    case "decrement":
      return updateOrderAmount(state, drinkName, (amount) =>
        Math.max(0, amount - 1),
      );
    case "input":
      if (isNaN(newAmount)) return state;
      else return updateOrderAmount(state, drinkName, () => newAmount);
    case "reset":
      return [];
  }
};

export default function DrinkProvider({ children }) {
  const [orders, dispatchOrders] = useReducer(orderReducer, []);
  const [isModalOpen, toggleModal] = useReducer((state) => !state, false);
  const [isResultOpen, toggleResult] = useReducer((state) => !state, false);

  const value = {
    orders,
    dispatchOrders,
    isModalOpen,
    toggleModal,
    isResultOpen,
    toggleResult,
  };

  return (
    <DrinkContext.Provider value={value}>{children}</DrinkContext.Provider>
  );
}
