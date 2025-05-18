import { useState } from 'react';
import './components/App.css';
import Search from './components/Search';
import FoodList from './components/FoodList';
import NavBar from './components/NavBar';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetail from './components/FoodDetail';


function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("680975")

  return (
    <div>
      <NavBar />
      <Search   foodData={foodData} setFoodData={setFoodData} />

      <Container> 
        <InnerContainer>
            <FoodList setFoodId= {setFoodId} foodData={foodData} />
        </InnerContainer>

         <InnerContainer>
            <FoodDetail foodId={foodId}/>
        </InnerContainer>
      </Container>
     
    </div>
  )
}

export default App
