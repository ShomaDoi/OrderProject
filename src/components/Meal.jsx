export default function Meal({ meal }) {
  console.log(meal.image);
  return (
 
      <li className="meal-item" key={meal.id}>
        <article>
          <img src={`http://localhost:3000/${meal.image}`} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-description">{meal.description}</p>
            <p className="meal-item-price">{meal.price}</p>
          </div>
          <div className="meal-item-action">
            <button >Add To Cart</button>
          </div>
        </article>
      </li>
   
  );
}
