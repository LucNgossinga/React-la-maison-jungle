import { plantList } from "../datas/plantList";

/*const categories = plantList.reduce((acc, currentValue) => {
  if (!acc.empty()) {
    let cat = currentValue.category;
    if (!acc.includes(cat)) acc.push(cat);
  }
}, []);
*/

const Allcategories = plantList.map((plant) => plant.category);
const categories = [];
Allcategories.forEach((cat) =>
  !categories.includes(cat) ? categories.push(cat) : null
);

function ShoppingList() {
  return (
    <>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>
            {plant.name} {plant.isBestSale ? <span>🔥</span> : null}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
