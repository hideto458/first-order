import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Options from "./components/Options";
import Modal from "./components/Modal";
import { useDrink } from "./hooks/useDrink";
import Result from "./components/Result";

export default function App() {
  const { isModalOpen } = useDrink();
  const { isResultOpen } = useDrink();
  return (
    <div>
      <div
        className="mx-auto grid h-dvh max-w-[32rem] grid-rows-[auto_3fr_2fr_auto] gap-6 px-[4vw] py-5"
        {...{ inert: isModalOpen || isResultOpen ? "" : undefined }}
      >
        <Header />
        <Orders />
        <Options />
        <Footer />
      </div>
      {isModalOpen && <Modal />}
      {isResultOpen && <Result />}
    </div>
  );
}
