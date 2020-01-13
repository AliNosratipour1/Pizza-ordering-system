import React, {useState} from 'react';
import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/banner';
import {Menu} from './Menu/menu';
import {Order} from './Order/Order';
import {FoodDialog} from './FoodDialog/FoodDialog';
import {GlobalStyle} from './Styles/GlobalStyle';


function App() {
  const [openFood, setOpenFood] = useState();
  return (
    
      <>
    <GlobalStyle/>
    <FoodDialog openFood={openFood} setOpenFood={setOpenFood}  />
    <Navbar/>
    <Order/>
    <Banner/>
    <Menu  setOpenFood={setOpenFood}  />
    </>
    
  );
}

export default App;
