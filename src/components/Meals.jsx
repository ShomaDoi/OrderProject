
import { useEffect } from "react";
import Meal from "./Meal";
import useHttp from "../hooks/useHttp";
export default function Meals() {
  const { data: loadedMeals, isLoading, error, sendRequest } = useHttp();
  console.log(loadedMeals);
  useEffect(() => {
    sendRequest("http://localhost:3000/meals",{});
  }, []);
  console.log(!loadedMeals);
  if (!loadedMeals ) {
    return <p>Loading meals...</p>;
  }
  return (
    <div>
      {!error && (
        <ul id="meals">
          {loadedMeals.map((meal) => {
            return <Meal key={meal.id} meal={meal}></Meal>;
          })}
        </ul>
      )}
      <p>{error}</p>
    </div>
  );
}
