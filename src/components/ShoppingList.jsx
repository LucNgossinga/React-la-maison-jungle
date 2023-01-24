import { plantList } from "../datas/plantList";
import "../styles/shoppingList.css";
import PlantItem from "./PlantItem";

const Allcategories = plantList.map((plant) => plant.category);
const categories = [];
Allcategories.forEach((cat) =>
  !categories.includes(cat) ? categories.push(cat) : null
);

//On peut également ranger le code en react dans des variables !
const plantsCategories = (
  <ul>
    {categories.map((cat) => (
      <li key={cat}>{cat}</li>
    ))}
  </ul>
);

function ShoppingList() {
  return (
    <>
      {plantsCategories}
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
