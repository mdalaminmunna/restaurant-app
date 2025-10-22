import { currenctFormatter } from "../util/formatting";

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currenctFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
