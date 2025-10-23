import MealItem from "./MealItem";
import useHTTP from "../hooks/useHTTP";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP(`${import.meta.env.VITE_BACKEND_URL}/meals`, requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Meals.....</p>;
  }

  if (error) {
    return <Error title="Failed to Fetch Meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
