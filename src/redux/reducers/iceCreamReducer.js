import pic1 from '../../images/ice-cream/2.jpg';
import pic2 from '../../images/Belgian Waffles/3516_0b.jpg';
import pic3 from '../../images/ice-cream/5.webp';
import pic4 from '../../images/Belgian Waffles/קפוצינו-41.jpeg';
import pic5 from '../../images/ice-cream/4.jpg';
import pic6 from '../../images/ice cream cake/5.jpg';
import pic7 from '../../images/ice cream cake/7.jpg';
import pic8 from '../../images/ice cream cake/11.jpg';
import pic9 from '../../images/ice-cream/icecream_recipe.jpg';
import pic10 from '../../images/ice cream cake/10.png';
import pic11 from '../../images/Belgian Waffles/3a2faaa2-2108-11ec-9601-f271353b6c2c__________.webp';
import pic12 from '../../images/Belgian Waffles/FIL_6395722_637484669825365741.jpg';
import pic13 from '../../images/frozen/-q2kun2phyhba494xpb8af8kc6685nbqzx5erg2cbrc (1).jpg';
import pic14 from '../../images/frozen/יוגורט.jpg';
import pic15 from '../../images/frozen/frozen_yogurt_powder-1.jpg';
import pic16 from '../../images/frozen/1.jpg';
import pic17 from '../../images/fruit shake/8.jpg';
import pic18 from '../../images/fruit shake/3.jpg';
import pic19 from '../../images/fruit shake/6.jpg';
import pic20 from '../../images/fruit shake/7.jpg';
import pic21 from '../../images/Hot beverage/Cappuccino/2.webp';
import pic22 from '../../images/Hot beverage/Cappuccino/7.jpg';
import pic23 from '../../images/milk shake/2.jpg';
import pic25 from '../../images/Hot beverage/Chocolate/1.jpg';
import pic26 from '../../images/milk shake/1.jpg';
import pic27 from '../../images/iceCoffe/ice coffee/5.jpg';
import pic28 from '../../images/iceCoffe/vanilla ice cream/1.png';
import pic29 from '../../images/iceCoffe/ice coffee/9.webp';
const iceCreams = [
    {
        id: 1,
        name: 'vanilla ice cream',
        qty: 5,
        image: pic1,
        price: 18,
        description: 'Italian vanilla ice cream in a glass',
        cartqty: 0
    },
    {
        id: 2,
        name: 'Colorful ice cream ',
        qty: 30,
        image: pic9,
        price: 48,
        description: 'Colorful ice cream balls with syrup',
        cartqty: 0
    },
 

    {
        id: 3,
        name: 'Cookies ice cream',
        qty: 26,
        image: pic3,
        price: 25,
        description: 'Cookies ice  cream in a cone',
        cartqty: 0
    },
   
    {
        id: 4,
        name: 'ice cream in a cone',
        qty: 70,
        image: pic5,
        price: 40,
        description: 'Colorful ice cream in a cone',
        cartqty: 0
    },
    {
        id: 5,
        name: 'Special pistachio cake',
        qty: 250,
        image: pic6,
        price: 250,
        description: 'Pistachio ice cream cake in three layers',
        cartqty: 0
    },
    {
        id: 6,
        name: 'Special birthday cake',
        qty: 36,
        image: pic7,
        price: 300,
        description: 'Birthday cake with toppings',
        cartqty: 0
    },
    {
        id: 7,
        name: 'Special tower cake',
        qty: 20,
        image: pic8,
        price: 330,
        description: 'Migdal milk cake',
        cartqty: 0
    },

    {
        id: 8,
        name: 'Special birthday cake',
        qty: 36,
        image: pic10,
        price: 400,
        description: 'Special birthday cake with toppings and fireworks',
        cartqty: 0
    },
        {
        id: 9,
        name: 'Divided Belgian Waffle',
        qty: 80,
        image: pic2,
        price: 45,
        description: 'Divided Belgian waffle with ice cream and toppings',
        cartqty: 0
    },
       {
        id:10,
        name: 'Round Belgian waffle',
        qty: 50,
        image: pic4,
        price: 60,
        description: 'Belgian waffle with ice cream and toppings',
        cartqty: 0
    },
    {
        id: 11,
        name: 'Colorful Belgian waffle',
        qty: 50,
        image: pic11,
        price: 65,
        description: 'Colorful Belgian waffle',
        cartqty: 0
    },
    {
        id: 12,
        name: 'Belgian waffle on a plate',
        qty: 50,
        image: pic12,
        price: 65,
        description: 'Belgian waffle on a plate',
        cartqty: 0
    },
    {
        id: 13,
        name: 'Frozen double vanilla',
        qty: 50,
        image: pic13,
        price: 73,
        description: 'Colorful ice cream in a glass',
        cartqty: 0
    },
    {
        id: 14,
        name: 'Double frozen strawberry',
        qty: 50,
        image: pic14,
        price: 55,
        description: 'Double frozen strawberry',
        cartqty: 0
    },
    {
        id: 15,
        name: 'Frozen strawberry ',
        qty: 50,
        image: pic15,
        price: 38,
        description: 'Frozen strawberry yogurt',
        cartqty: 0
    },
    {
        id: 16,
        name: 'Frozen yogurt cookies',
        qty: 50,
        image: pic16,
        price: 49,
        description: 'Colorful ice cream in a glass',
        cartqty: 0
    },
    {
        id: 17,
        name: 'Double Kiwi Smoothie',
        qty: 58,
        image: pic17,
        price: 60,
        description: 'Double Kiwi Smoothie',
        cartqty: 0
    },
    {
        id: 18,
        name: 'Smoothie with many flavors',
        qty: 50,
        image: pic18,
        price: 65,
        description: 'Smoothie with many flavors',
        cartqty: 0
    },
    {
        id: 19,
        name: 'Berry smoothie in a glass',
        qty: 50,
        image: pic19,
        price: 60,
        description: 'Berry smoothie in a glass',
        cartqty: 0
    },
    {
        id: 20,
        name: 'Banana smoothie',
        qty: 50,
        image: pic20,
        price: 28,
        description: 'Banana smoothie',
        cartqty: 0
    },
  
    {
        id: 21,
        name: 'A frothy cappuccino ',
        qty: 50,
        image: pic22,
        price: 29,
        description: 'A frothy cappuccino in a glass',
        cartqty: 0
    },
    {
        id: 22,
        name: 'Chocolate vanilla cookies',
        qty: 38,
        image: pic23,
        price: 33,
        description: 'Chocolate vanilla cookies',
        cartqty: 0
    },
    {
        id: 23,
        name: 'Cappuccino in a glass',
        qty: 50,
        image: pic21,
        price: 28,
        description: 'Cappuccino in a glass',
        cartqty: 0
    },
    {
        id: 24,
        name: 'Marshmallow chocolate',
        qty: 50,
        image: pic25,
        price: 35,
        description: 'Marshmallow chocolate',
        cartqty: 0
    },
    {
        id: 25,
        name: 'Iced coffee in sizes',
        qty: 17,
        image: pic26,
        price: 60,
        description: 'Iced coffee in sizes',
        cartqty: 0
    },
    {
        id: 26,
        name: 'Iced coffee with ice cubes',
        qty: 50,
        image: pic27,
        price: 15,
        description: 'Colorful ice cream in a glass',
        cartqty: 0
    },
    {
        id: 27,
        name: 'Vanilla ice cream',
        qty: 50,
        image: pic28,
        price: 12,
        description: 'vanilla ice cream',
        cartqty: 0
    },
    {
        id: 28,
        name: 'Chocolate with whipped cream',
        qty: 50,
        image: pic29,
        price: 24,
        description: 'Chocolate with whipped cream',
        cartqty: 0
    },
]
const iceCreamReducer = (state = iceCreams, action) => {
    switch (action.type) {
        case "ADD_ICE_CREAM_QTY":
            {
                const newIceCreams = [...state]
                newIceCreams[action.product].qty += 1
                return newIceCreams
            }
        case "DECREASE_ICE_CREAM_QTY":
            {
                // debugger
                const newIceCreams = [...state]
                if(newIceCreams.find((carriage)=> carriage.id===action.id).qty===0)
                {
                    alert('Out of Stock')
                }
                if(newIceCreams.find((carriage)=> carriage.id===action.id).qty<4&&newIceCreams.find((carriage)=> carriage.id===action.id).qty>0)
                {
                    alert('Low in Stock')
                }
                newIceCreams.find((carriage)=> carriage.id===action.id).qty-=1;
                return newIceCreams
            }
        default:
            return state
        

}
}
export default iceCreamReducer

