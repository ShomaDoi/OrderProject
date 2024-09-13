import Button from "./UI/Button";
import { currencyFormmater } from "../utils/format";
import CartContext from "../store/CartContext";
import {  useContext } from "react";
export default function Meal({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddMeal() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-price">
            {currencyFormmater.format(meal.price)}
          </p>
        </div>
        <div className="meal-item-action">
          <Button onClick={handleAddMeal}>Add To Cart</Button>
        </div>
      </article>
    </li>
  );
}
