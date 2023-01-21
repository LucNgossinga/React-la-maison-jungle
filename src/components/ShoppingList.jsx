import { plantList } from "../datas/plantList";
import "../styles/shoppingList.css";
import CareScale from "./CareScale";

/*const categories = plantList.reduce((acc, currentValue) => {
  if (!acc.empty()) {
    let cat = currentValue.category;
    if (!acc.includes(cat)) acc.push(cat);
  }
}, []);
*/

//Génération (rendering) des catégories de plantes
const Allcategories = plantList.map((plant) => plant.category);
const categories = [];
Allcategories.forEach((cat) =>
  !categories.includes(cat) ? categories.push(cat) : null
);

const plantsCategories = (
  <ul>
    {categories.map((cat) => (
      <li key={cat}>{cat}</li>
    ))}
  </ul>
);

//Génération des plantes
const plantsName = (
  <ul>
    {plantList.map((plant) => (
      <li key={plant.id} className="lmj-plant-item">
        {plant.name} {plant.isBestSale ? <span>🔥</span> : null}
        {plant.isSpecialOffer ? <div className="lmj-sales">Soldes</div> : null}
        <CareScale careType="water" scaleValue={plant.water} />
        <CareScale careType="light" scaleValue={plant.light} />
      </li>
    ))}
  </ul>
);

function ShoppingList() {
  return (
    <>
      {plantsCategories}
      {plantsName}
    </>
  );
}

export default ShoppingList;
