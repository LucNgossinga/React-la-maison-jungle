import "../styles/cart.css";

const Cart = () => {
  let itemPrice1 = 8;
  let itemPrice2 = 10;
  let itemPrice3 = 15;
  return (
    <>
      <ul className="lmj-cart">
        <li>Monstera : {itemPrice1}$</li>
        <li>Lierre : {itemPrice2}$</li>
        <li>Bouquet de fleurs : {itemPrice3}$</li>
      </ul>
      <p>Total du panier = {itemPrice1 + itemPrice2 + itemPrice3}$</p>
    </>
  );
};

export default Cart;
