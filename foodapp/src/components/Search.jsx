//48: useEffect Hook In React
//making API call using useEffect Hook
//only when i entered some thing then only fetching should happen
//49: Making API Call In React
//50: Creating State To Save Food Data
//51: Building The Food List Component
//52: Food Item Component
// 53: Creating The Nav Component
//54: Creating The Search Component
//55: Styling The Food Item Component
//56: Outer Container Component
//57: Creating The Inner Container Component
//58: Creating The Food Detail Component
//59: Fetching Recipes From API
//60: Fetching Recipe Instructions
//61: Designing The Recipe Detail Component
//62: Fetching Ingredients


import { useEffect, useState } from "react";
import styles from './search.module.css';


    const URL="https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY="47d4ef9df4d741288d5eba23dc1bb8e0";//in real world project its not good practice to save api key here instead save in eniveronment variable is good practice.

export default function Search({foodData, setFoodData}) {   //to display the api content in the body section
    const [query, setQuery]=useState("pizza");  //to store search item

    useEffect(()=>{
       async function fetchFood(){
           const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)    //response comes in json format  //wait until fetching data
            const data=await res.json();  //wait until response come back 
           // console.log(data);//get this from console
            console.log(foodData);//************************** 
            
            /*
            // Accessing headers
        const quotaRequest = res.headers.get("X-API-Quota-Request");
        const quotaUsed = res.headers.get("X-API-Quota-Used");
        const quotaLeft = res.headers.get("X-API-Quota-Left");

        console.log("Points used by request:", quotaRequest);
        console.log("Total points used today:", quotaUsed);
        console.log("Points left today:", quotaLeft);
            */

            setFoodData(data.results);
        }fetchFood()
    }, [query])
   
    return (
    <div className={styles.searchContainer}>
      <input className={styles.input}  value={query} onChange={(e)=> setQuery(e.target.value)}    type="text" />
    </div>
  )
}


 /*   //useEffect syntax      useEffect(()=>{}, [])-->callback function, dependency array
    useEffect(()=>{    //each time i type somthing it will execute
        function demo(){
            console.log("demo exec");
        }demo()
    }, [query]) //passed  state to dependency array
*/