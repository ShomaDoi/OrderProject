import { useState } from "react";
import { useEffect } from "react";
import Meal from "./Meal";


export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);
    
    useEffect(() => {
        async function loadMeals()  {
            
            try {
                const mealsData = await fetch('http://localhost:3000/meals');
          
                if (!mealsData.ok){
                   
                        setErrorMessage(`${mealsData.status} , ${mealsData.statusText}`);
                        setErrorStatus(true);
                        console.log(errorMessage);
                }
                const meals = await mealsData.json();
                setLoadedMeals(meals);
            } catch(error)  {
                console.log("Failed to fetch");
            }
               
           
            
            
        }

        loadMeals();

        
    },[]);
    
    

    return(
        <div>
        {!errorStatus && <ul id="meals">
            {loadedMeals.map((meal) => {
              return  <Meal key={meal.id} meal={meal}></Meal>
            })}
        </ul>}
        <p>{errorMessage}</p>
        </div>
    );
}