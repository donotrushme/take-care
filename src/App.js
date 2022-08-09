import "./App.css";
import ItemQuantity from "./ItemQuantity";
import Inventory from "./inventory.json";
import Categories from "./categories.json";
import CategoryType from "./CategoryType";

function App() {
  return (
    <div>
      <header>Super Hunks! Home of the best estimating software, G</header>
      <div className="inventory">
        {Categories.map((category) => {
          if (category.searchMethod === "startsWith") {
            return Inventory.filter((item) =>
              item.name.startsWith(category.segment)
            ).map((inventory) => {
              return (
                <div>
                  <h3> {inventory.name} </h3>
                  <ItemQuantity>{inventory.name}</ItemQuantity>
                </div>
              );
            });
          }
          return null;
        })}
      </div>
      <div>
        <h1>B</h1>
        {Categories.map((category) => {
          if (category.searchMethod === "includes") {
            return Inventory.filter((item) =>
              item.name.includes(category.segment)
            ).map((inventory) => {
              return (
                <div>
                  <h3>{inventory.name} </h3>
                  <ItemQuantity>{inventory.name}</ItemQuantity>
                </div>
              );
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
