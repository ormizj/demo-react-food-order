import Cart from "components/Cart/Cart";
import Header from "components/Layout/Header";
import Meals from "components/Meals/Meals";
import { useState } from "react";
import CartProvider from "store/CartProvider";

function App() {
  // better for this state to be in the CartProvider component, keeping it as demo purposes
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
