import Inventory from "./inventory.json";
import ItemQuantity from "./ItemQuantity";

function CategoryType({ category }) {
  const filterItems = () => {
    if (category.searchMethod === "startsWith") {
      return Inventory.filter((item) =>
        item.name.startsWith(category.category)
      ).map((inventory) => {
        return (
          <div>
            <h1>{inventory.name} </h1>
            <ItemQuantity>{inventory.name}</ItemQuantity>
          </div>
        );
      });
    }
    if (category.searchMethod === "includes") {
      return Inventory.filter((item) =>
        item.name.includes(category.category)
      ).map((inventory) => {
        return (
          <div>
            <h1>{inventory.name} </h1>
            <ItemQuantity>{inventory.name}</ItemQuantity>
          </div>
        );
      });
    }
    return null;
  };
  return (
    <div>
      <p>{category.category}</p>
      <div className="inventory">{filterItems()}</div>
    </div>
  );
}

export default CategoryType;
