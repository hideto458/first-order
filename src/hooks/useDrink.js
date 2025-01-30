import { useContext } from "react";
import { createContext } from "react";

export const DrinkContext = createContext();
export const useDrink = () => useContext(DrinkContext);
