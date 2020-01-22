import {useState} from 'react';

export function useToppings(defaultTopping){
  const [toppings , setToppings] = useState(defaultTopping || getDefaultToppings)

function checkTopping(index){
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
}
return{
    checkTopping,
    toppings
}


}

const toppingList = [
"Extrea Cheese",
"Peperoni",
"Sausage",
"Onions",
"Pepers",
"Pineaple",
"Ham",
"Spanich",
"Archichoks",
"Mushroom",
"Anchovies"  
]

function getDefaultToppings() {
return toppingList.map(topping => ({
  name:topping,
  checked:false  
}));
 
}