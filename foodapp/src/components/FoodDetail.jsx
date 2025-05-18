//getting receipe information based on id//fetch from spoonacular api...

import { useEffect, useState } from "react";
import styles from './fooddetails.module.css'
import ItemList from "./ItemList";
//make an api call to get details based on id
export default function FoodDetail({foodId}) {

    const [food, setFood]= useState({})
    const [isLoading, setIsLoading] = useState(true)
    const IdURL=`https://api.spoonacular.com/recipes/${foodId}/information`
     const API_KEY="47d4ef9df4d741288d5eba23dc1bb8e0";//in real world project its not good practice to save api key here instead save in eniveronment variable is good practice.


    useEffect(()=>{

       async function fetchFood(){
           const res= await fetch(`${IdURL}?apiKey=${API_KEY}`)
             const data= await  res.json()
             console.log(data)
             setFood(data)
             setIsLoading(false)
        }fetchFood()
    }, [foodId])

  return (
    <div >
     <div className={styles.receipeCard}>
        <h1 className={styles.receipeName}>{food.title}</h1>
        <img className={styles.receipeImage} src= {food.image} alt=" " />
    <div className={styles.receipeDetails}>
    <span>
        <strong>⏲{food.readyInMinutes} Minutes</strong>
    </span>
    <span>
        👪<strong>Services {food.servings}</strong>
    </span>
    <span>
        <strong>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</strong>
        <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
    </span>
    </div>
    <div>
        ${" "}
        <span>
            <strong>{food.pricePerServing / 100} Per serving</strong>
        </span>
    </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.receipeInstructions}>
        <ol>
         {isLoading ? (<p> Loading... </p>) : (food.analyzedInstructions[0].steps.map((stepp)=>(<li>{stepp.step}</li>))) }
    
    </ol>
    </div>
    </div>
    </div>
   

  )
}
