import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartClose, setCartclose] = useState(false);
  const onOpenOverlay = () => {
    setCartclose(true);
  };
  const onCloseOverlay = () => {
    setCartclose(false);
  };
  return (
    <CartProvider>
      {cartClose && <Cart onCloseCart={onCloseOverlay} />}
      <Header onOpenCart={onOpenOverlay} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
