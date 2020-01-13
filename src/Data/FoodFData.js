export const fooditems =[
{
name:'Cheese Pizza',
img:'/img/pizza.png',
section:'Pizza'
},
{
name:'Pepproni Pizza',
img:'/img/pizza2.jpeg',
section:'Pizza'
},
{
name:'Chiken Pizza',
img:'/img/chicken-pizza.jpeg',
section:'Pizza'
},
{
name:'Veggi Pizza',
img:'/img/healthy-pizza.jpeg',
section:'Pizza'
},
{
name:'Burger',
img:'/img/burger.jpeg',
section:'Burger'
},
{
name:'Veggi Pizza',
img:'/img/gyro.jpeg',
section:'Sandwich'
},
{
name:'Shrimp PoBoy',
img:'/img/sandwich.jpeg',
section:'Sandwich'
},
{
name:'Chips',
img:'/img/fries.jpeg',
section:'Chips'
}

];

export const foods = fooditems.reduce((res ,food) => {
if(!res [food.section]){
    res[food.section] = [];
}
res[food.section].push(food);
return res;
}, {});