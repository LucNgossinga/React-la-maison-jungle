import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

//Pour l'utilisation de la prop technique children dans 'Banner'
import logo from "../assets/logo.png";

function App() {
  return (
    <>
      <Banner>
        <img src={logo} alt="La maison jungle" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
    </>
  );
}

export default App;
