export function formatPrice(price){
return price.toLocaleString('en-US', {
    style:'currency',
    currency: 'GBP'
})
}


export const fooditems =[
{
name:'Cheese Pizza',
img:'/img/pizza.png',
section:'Pizza',
price:9.95
},
{
name:'Pepproni Pizza',
img:'/img/pizza2.jpeg',
section:'Pizza',
price:4
},
{
name:'Chiken Pizza',
img:'/img/chicken-pizza.jpeg',
section:'Pizza',
price:6
},
{
name:'Veggi Pizza',
img:'/img/healthy-pizza.jpeg',
section:'Pizza',
price:1
},
{
name:'Burger',
img:'/img/burger.jpeg',
section:'Burger',
price:1.5
},
{
name:'Veggi Pizza',
img:'/img/gyro.jpeg',
section:'Sandwich',
price:2.5
},
{
name:'Shrimp PoBoy',
img:'/img/sandwich.jpeg',
section:'Sandwich',
price:4
},
{
name:'Chips',
img:'/img/fries.jpeg',
section:'Chips',
price:3.5
}

];

export const foods = fooditems.reduce((res ,food) => {
if(!res [food.section]){
    res[food.section] = [];
}
res[food.section].push(food);
return res;
}, {});