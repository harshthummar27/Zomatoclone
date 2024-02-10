const DeliveryRes = [
    {
        id: 1,
        name: `La Pino'z Pizza`,
        image: 'https://b.zmtcdn.com/data/pictures/chains/9/18438909/8ac67f799c14cd3b586e18e48eaa00f7_o2_featured_v2.jpg?output-format=webp',
        discount: 50,
        dishes: 'Pizza, Pasta, Italian, Fast Food',
        DeliveryTime: 22,
        Dining_Reviews: 2.1,
        Delivery_Reviews: 4.1,
        location: 'Ashram Road, Ahmedabad',
        openTime: '11am',
        CloseTime: '11pm',
        Foods: [
            {
                id: 1,
                name: 'Margherita Pizza (personal Giant Slice (22.5 Cm))',
                price: 140,
                desc: 'A classic cheesy Margherita. Cant go wrong. [Fat-14.3 per 100 g, Protein-12.6 per 100 g, Carbohydrate-39.2 per 100 g, Sugar-0 per 100 g, Calories-336 K.cal] Nutritional information per 100g',
                image: 'https://b.zmtcdn.com/data/dish_photos/92b/a413a537c40ab2d7b7e03bac6baea92b.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id: 2,
                name: 'Garden Delight Pizza (personal Giant Slice (22.5 Cm))',
                price: 190,
                desc: 'A classic veg pizza that combines the zing and freshness of onions, tomatoes and capsicum. [Fat-7.2 per 100 g, Protein-9.8 per 100g, Carbohydrate-31.4 per 100 g, Sugar-0 per 100 g, Calories-230 k.cal]Nutritional information per 100g',
                image: 'https://b.zmtcdn.com/data/dish_photos/cb4/8416b9850bf0cb0a5fd21c6259338cb4.png?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id: 3,
                name: 'Lovers Bite Pizza (personal Giant Slice (22.5 Cm))',
                price: 190,
                desc: 'A wholesome combination of tossed mushrooms, olives and juicy sweet corn. [Fat-9 per 100 g, Protein-12.4 per 100 g, Carbohydrate-32.2 per 100 g, Sugar-0 per 100 g, Calories-260.1 k.cal]Nutritional information per 100g',
                image: 'https://b.zmtcdn.com/data/dish_photos/572/9d936419ef9044c68920b233e26a7572.png?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id: 4,
                name: 'Cheezy-7 Pizza (personal Giant Slice (22.5 Cm))',
                price: 255,
                desc: 'An Exotic Combination of White Mozzarilla, Cream White Cheese, Cheddar, Monterey Jack, Cream Orange Cheese, Colby, Orange Cheddar. [Fat-12.4, Protein-10.3, Carbohydrate-32.2, Sugar-2.1, Calories-281.8]',
                image: 'https://b.zmtcdn.com/data/dish_photos/895/ed3ae90259010ffc4de84207059bc895.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id: 5,
                name: 'Paneer Tikka Butter Masala Pizza (personal Giant Slice (22.5 Cm))',
                price: 255,
                desc: 'An indian Speciality on a La Pinoz Pizza. Exotic Paneer Tikka, Onion, Capsicum & Red Paprika. [Fat-12.7 per 100 g, Protein-13.4 per 100 g, Carbohydrate-24.6 per 100 g, Sugar-0 per 100 g, Calories-266.2 k.cal]Nutritional information per 100g',
                image: 'https://b.zmtcdn.com/data/dish_photos/112/237fd48f16146f4da316f127e7fd1112.png?fit=around|130:130&crop=130:130;*,*'
            },
        ]
    },
    {
        id: 2,
        name: "McDonald's",
        image: 'https://b.zmtcdn.com/data/pictures/1/110271/fa5cb9c40843192a37febd1dfa7cebfb_o2_featured_v2.jpg?output-format=webp',

        dishes: 'Burger, Fast Food, Desserts, Beverages',
        DeliveryTime: 13,
        Dining_Reviews: 3.9,
        Delivery_Reviews: 4.1,
        location: 'Ashram Road, Ahmedabad',
        openTime: '10am',
        CloseTime: '4pm',
        Foods:[
           {
            id:10,
            name:'2 Cheesy Italian Veg + Fries (L) + 2 Coke',
            price:499.05,
            desc:'Get the best value in your meal for 2. Save big on your favourite sharing meal - 2 Cheesy Italian Veg + Fries (L) + 2 Coke',
            image:'https://b.zmtcdn.com/data/dish_photos/9c1/625c92fe40dee2fb307bd081208b49c1.png?fit=around|130:130&crop=130:130;*,*'
           },
           {
            id:11,
            name:'McAloo Tikki Burger',
            price:69.52,
            desc:"The World's favourite Indian burger! A crispy Aloo patty, tomato mayo sauce & onions",
            image:'https://b.zmtcdn.com/data/dish_photos/87f/b13811eeee71e578bc6ca89eca0ec87f.png?fit=around|130:130&crop=130:130;*,*'
           },
           {
            id:12,
            name:'Cappuccino (R)',
            price:200,
            desc:"A refreshingly warm shot of espresso made with 100% Arabica beans, topped with milk that is steamed to a thick, perfect froth. A classic favourite.",
            image:'https://b.zmtcdn.com/data/dish_photos/894/0a969eb81b4986afcc6cc3d27d8ad894.png?fit=around|130:130&crop=130:130;*,*'
           },
           {
            id:13,
            name:'Strawberry Shake + Fries (M)',
            price:195.24,
            desc:"Can't decide what to eat? We've got you covered. Get this snacking combo with Medium Fries and Strawberry Shake.",
            image:'https://b.zmtcdn.com/data/dish_photos/f53/74603316fc90ea3cd2b193ab491fbf53.png?fit=around|130:130&crop=130:130;*,*'
           },
           {
            id:14,
            name:'McVeggie Burger + 2 Fries (M) + McAloo Tikki+ Veg Pizza McPuff',
            price:306,
            desc:"Get the best value in your meal for 2. Save big on your favourite sharing meal - McVeggie Burger + 2 Fries (M) + McAloo Tikki Burger + Veg Pizza McPuff",
            image:'https://b.zmtcdn.com/data/dish_photos/364/2bb4b3cae53b1a6739aaf769ce2b3364.png?fit=around|130:130&crop=130:130;*,*'
           },
        ]
    },
    {
        id: 3,
        name: "Jay Bhavani Vadapav",
        image: 'https://b.zmtcdn.com/data/pictures/chains/7/110227/8a94d8da9ccf006f4a783d75e01081ac_o2_featured_v2.jpg?output-format=webp',
  
        dishes: 'Street Food, Fast Food, Pizza, Sandwich, Beverages, Shake',
        DeliveryTime: 22,
        Dining_Reviews: 0,
        Delivery_Reviews: 3.5,
        location: 'C G Road, Ahmedabad',
        openTime: '10am',
        CloseTime: '11pm',
        Foods: [
            {
                id: 6,
                name: 'Bombay Vadapav',
                price: 35,
                desc: 'Deep fried potato dumplings placed inside a bread bun, sliced almost half through the middle.',
                image: 'https://b.zmtcdn.com/data/dish_photos/4c4/74f2262ada61a52d7af5711d5a9224c4.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id: 7,
                name: 'Crunchy Burger',
                price: 100,
                desc: 'A crispy vegetable patty with assorted veggies and mayonnaise sauces stuffed between lightly fried buns.',
                image: 'https://b.zmtcdn.com/data/dish_photos/c51/4346971c7ef7e621bba973194bc80c51.png?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id: 8,
                name: '3 in 1 Cheese Grilled Sandwich',
                price: 180,
                desc: 'Aloo matar masala with cheese and vegetables.',
                image: 'https://b.zmtcdn.com/data/dish_photos/284/a28be464f6242ad45368353cfafa5284.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id: 9,
                name: 'Cheese Roll',
                price: 150,
                desc:'Long bun roasted in butter and full of cheese.',
                image: 'https://b.zmtcdn.com/data/dish_photos/5fa/3fdcb692c9083eb4a8c94afebdca75fa.png?fit=around|130:130&crop=130:130;*,*'
            },
        ]
    },
    {
        id: 4,
        name: "London Yard Pizza",
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/19506590/e16bd4e3df5f6e74680af400a1a876af_o2_featured_v2.jpg?output-format=webp',
        discount: 50,
        dishes: 'Pizza, Fast Food, Beverages',
        DeliveryTime: 21,
        Dining_Reviews: 3.6,
        Delivery_Reviews: 3.7,
        location: 'Paldi, Ahmedabad',
        openTime: '11am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:15,
                name:'Cheese & Corn Pizza',
                pirce:169,
                desc:'Sweet & Juicy Golden Corn With 100% Real Mozzarella Cheese.',
                image:'https://b.zmtcdn.com/data/dish_photos/6f3/3c3d81ae6bdeb620447d8ca2d8bd66f3.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:16,
                name:'Country Feast Pizza',
                pirce:179,
                desc:'Onion, Capsicum, American Corn, Olives & Mushroom.',
                image:'https://b.zmtcdn.com/data/dish_photos/78f/f94f3b123eb122016fc02f1b0b9db78f.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:17,
                name:'Farm Fresh Pizza',
                pirce:270,
                desc:'Onion, Fresh Tomato, Capsicum, Olives, Jalapenos, Babycorn & Broccoli.',
                image:'https://b.zmtcdn.com/data/dish_photos/af7/716f2f8dd137d970329aa1409e4bbaf7.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:18,
                name:'Signature All In One Pizza',
                pirce:270,
                desc:'Capsicum, Yellow Bell Pepper, Red Bell Pepper, Mushroom, Olives, Jalapeno, Sundried Tomato, Baby Corn.',
                image:'https://b.zmtcdn.com/data/dish_photos/68f/346e468a82e6cf16c4375126aaf1f68f.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:19,
                name:'Triple Tango Pizza',
                pirce:179,
                desc:'Jalapeno, Olives, Red Paprika.',
                image:'https://b.zmtcdn.com/data/dish_photos/404/be41c1461c1f5c9037d1d866a8fb8404.jpeg?fit=around|130:130&crop=130:130;*,*'
            }
        ]
    },
    {
        id: 5,
        name: "Burger King",
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp',
        discount: 50,
        dishes: 'Burger, Fast Food, Desserts, Beverages',
        DeliveryTime: 26,
        Dining_Reviews: 3.9,
        Delivery_Reviews: 3.9,
        location: 'C G Road, Ahmedabad',
        openTime: '9am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:20,
                name:'Whopper Jr Veg+ Crispy Veg.',
                price:220,
                desc:'Our signature veg whopper in a smaller size + Crispy veg patty burger',
                image:'https://b.zmtcdn.com/data/dish_photos/272/1d825e0c8ad120344a6e2f1f8e644272.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:21,
                name:'Chocolate Thick Shake + Crispy Veg Burger,',
                price:169,
                desc:'MRP. 204 | Save Rs. 35, Chocolate Thick Shake + Crispy Veg Burger',
                image:'https://b.zmtcdn.com/data/dish_photos/626/4e4d9e44a40cd2cd823eb9814028e626.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:22,
                name:'Choco Lava Cup + Chocolate Mousse Cup,',
                price:179,
                desc:'MRP. 218 | Save Rs. 49, Choco Lava Cup + Chocolate Mousse Cup',
                image:'https://b.zmtcdn.com/data/dish_photos/5cf/018ade0abdb84de0f487b5474da035cf.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:23,
                name:'Game Changer Combo - Veg',
                price:656,
                desc:'Save Rs. 122 | 2 Veg Whopper + 2 Med Fries + 2 Medium Soft Drink (Cola)',
                image:'https://b.zmtcdn.com/data/dish_photos/df5/774235fbe1e90fc68eecfbfa407d6df5.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:24,
                name:'Cheezy Twins',
                price:338,
                desc:"MRP: 398 | Save 15%, Hot 'N' Cheezy Burger + Hot 'N' Cheezy Burger",
                image:'https://b.zmtcdn.com/data/dish_photos/603/5e1c0cc7ad4a698eb2ed778831c52603.jpg?fit=around|130:130&crop=130:130;*,*'
            },
        ]
    },
    {
        id: 6,
        name: "KFC",
        image: 'https://b.zmtcdn.com/data/pictures/chains/5/112945/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg',

        dishes: 'Burger, Fast Food, Biryani, Desserts, Beverages',
        DeliveryTime: 21,
        Dining_Reviews: 2.8,
        Delivery_Reviews: 3.8,
        location: 'C G Road, Ahmedabad',
        openTime: '11am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:25,
                name:'Veg Zinger Burger with Cheese',
                price:213,
                desc:'Signature veg burger with crispy patties, cheese slice, veggies & a tangy sauce',
                image:'https://b.zmtcdn.com/data/dish_photos/fed/6d8c645fcd7d5368741ccc61933fafed.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:26,
                name:'Veg Rice Bowlz',
                price:199,
                desc:'Aromatic Veg rice bowl mixed with spicy gravy',
                image:'https://b.zmtcdn.com/data/dish_photos/6e6/b55628a57b4ae927013617605d4db6e6.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:27,
                name:'Plain Rice Bowl',
                price:139,
                desc:'Plain Rice Bowl',
                image:'https://b.zmtcdn.com/data/dish_photos/30e/91d90868dbe5fdddd039e5fb38e3830e.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:28,
                name:'Spicy Mix French Fries - Medium',
                price:114,
                desc:'Crispy french fries with a spicy chilli lime sprinkle',
                image:'https://b.zmtcdn.com/data/dish_photos/a96/bfc33bc1e80b762c30bcb7b8fb7f6a96.jpeg?fit=around|130:130&crop=130:130;*,*',
            }
        ]
    },
    {
        id: 7,
        name: "Domino's Pizza",
        image: 'https://b.zmtcdn.com/data/pictures/chains/6/111026/46ab03171d9eec9cc24d2067569ef485_o2_featured_v2.jpg',
        discount: 50,
        dishes: 'Pizza, Italian, Pasta, Fast Food, Desserts',
        DeliveryTime: 30,
        Dining_Reviews: 3.4,
        Delivery_Reviews: 3.4,
        location: 'Ellis Bridge, Ahmedabad',
        openTime: '11am',
        CloseTime: '11:45pm',
        Foods:[
            {
                id:29,
                name:'Fiery Jalapeno & Paprika',
                price:179,
                desc:"Spiciest veg pizza with jalapeno & red paprika toppings and a new spicy peri peri sauce.",
                image:'https://b.zmtcdn.com/data/dish_photos/a96/bfc33bc1e80b762c30bcb7b8fb7f6a96.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:30,
                name:'Margherita with Ragi Crust',
                price:208,
                desc:'Enjoy the all-time Classic delight, now with the goodness of our new Ragi Super Crust.',
                image:'https://b.zmtcdn.com/data/dish_photos/a18/6623af0eed9dcaaa516a4762f6293a18.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:31,
                name:'Veg Loaded',
                price:189,
                desc:'Tomato, Jalapeno, Corn, Grilled Mushroom & crushed Aranchini Patty in a fresh pan crust',
                image:'https://b.zmtcdn.com/data/dish_photos/e66/67f137415f266758203dea6e20d5ee66.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:32,
                name:'Spicy Veg Party Combo @ Rs. 140 off',
                price:849,
                desc:'Med Blazing On & Paprika + Med Fiery Jalapeno & Paprika + 2GB + 2 Pepsi',
                image:'https://b.zmtcdn.com/data/dish_photos/7a9/29101a5eb18045c038a511e60bee27a9.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
        ]
    },
    {
        id: 8,
        name: "Pizza Hut",
        image: 'https://b.zmtcdn.com/data/pictures/chains/6/110316/e81f66522df2f3dbc3c9d0aa3ce0756d_o2_featured_v2.jpg',
        discount: 40,
        dishes: 'Pizza, Pasta, Italian, Desserts, Beverages',
        DeliveryTime: 26,
        Dining_Reviews: 3.8,
        Delivery_Reviews: 3.6,
        location: 'Ashram Road, Ahmedabad',
        openTime: '5am',
        CloseTime: '10am',
        Foods:[
            {
               id:33,
               name:'Hut Treat Meal for 2 - Veg',
               price:529,
               desc:'1 Medium Veg Pizza upto Signature, 1 Classic BreadStix, 1 Pepsi',
               image:'https://b.zmtcdn.com/data/dish_photos/f92/fdfbd0bc28dd767baeafdc2fa6d1cf92.png?fit=around|130:130&crop=130:130;*,*' 
            },
            {
                id:34,
                name:'Mexican Fiesta',
                price:319,
                desc:'Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce.',
                image:'https://b.zmtcdn.com/data/dish_photos/4f3/0c4c12819d98a35144e3f08451ae64f3.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:35,
                name:'Margherita Pizza',
                price:169,
                desc:'Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!',
                image:'https://b.zmtcdn.com/data/dish_photos/793/8b46ba82727c451f87740cda85b89793.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:35,
                name:'Cheese Garlic Bread',
                price:159,
                desc:'Nothing beats our garlic bread! Period!',
                image:'https://b.zmtcdn.com/data/dish_photos/e46/e4c4866524653ea77d8f0a3f9a207e46.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:36,
                name:'Zesty Paneer Pocket',
                price:129,
                desc:'Freshly baked pocket stuffed with flavourful paneer, veggies & smoked texas garlic sauce',
                image:'https://b.zmtcdn.com/data/dish_photos/72e/3e12ea8ffeffa296ab87599edaf1672e.jpg?fit=around|130:130&crop=130:130;*,*'
            },

        ]
    },
    {
        id: 9,
        name: "Subway",
        image: 'https://b.zmtcdn.com/data/pictures/chains/1/110381/004b9add9891d69a91cfacf9b7bb2818_o2_featured_v2.jpg',
        discount: 50,
        dishes: 'Healthy Food, Sandwich, Fast Food, Wraps, Salad, Beverages',
        DeliveryTime: 19,
        Dining_Reviews: 4.0,
        Delivery_Reviews: 3.9,
        location: 'Navrangpura, Ahmedabad',
        openTime: '9:30am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:37,
                name:'Bombay Grill Sandwich',
                price:189,
                desc:'The classic Bombay sandwich in grilled Italian white bread loaded with tomato, cucumber, onion, capsicum, coriander & green chillies chutney and a whole lotta love. Serving size 219 g / 443 kcal. Contains wheat and milk.',
                image:'https://b.zmtcdn.com/data/dish_photos/f77/3f3ec1426e5e849108b876a07826af77.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:38,
                name:'Delhi Tikki Combo',
                price:226,
                desc:'Combo of your favourite freshly grilled sandwich and a choice of drink.',
                image:'https://b.zmtcdn.com/data/dish_photos/96b/1337154863b5ecae5afa1b393ae6296b.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:39,
                name:'Crunchy Mexican Sandwich',
                price:279,
                desc:'Multigrain toasted Sub with Mexican bean patty, tomato, capsicum, onion, olives, jalapeño, southwest chipotle sauce & crunchy nachos. Serving size - 295 g/ 702 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.',
                image:'https://b.zmtcdn.com/data/dish_photos/71a/8a75a247ac92193e90c8275c4794271a.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:40,
                name:'Tangy Paneer Tikka Signature Wrap',
                price:290,
                desc:'Double the yum with double portion of roasted paneer tikka, along with nutritious veggies and your favourite sauces, inside a tortilla of your choice.',
                image:'https://b.zmtcdn.com/data/dish_photos/f9d/1bf5b3b5b2ebab8030c2026647e47f9d.jpg?fit=around|130:130&crop=130:130;*,*'
            },
        ]
    },
    {
        id: 10,
        name: "La Milano Pizzeria",
        image: 'https://b.zmtcdn.com/data/pictures/chains/1/19708611/58e9a8bb27bf7435a139c53b701a722d_o2_featured_v2.jpg',
        discount: 50,
        dishes: 'Pizza, Pasta, Italian, American, Mexican, Desserts, Beverages, Fast Food',
        DeliveryTime: 26,
        Dining_Reviews: 4.1,
        Delivery_Reviews: 4.0,
        location: 'Navrangpura, Ahmedabad',
        openTime: '10am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:41,
                name:'Authentic Veggie Pizza (Regular )',
                price:290,
                desc:'Green Capsicum, Crunchy Onion, Spiced Paneer In Jalapeno Sauce. Nutritional Information As Per 100 Gms (calories 300.57 Kacl , Fat 13.37 , Cholesterol 7 , Carbohydrate 36.69 , Sugar 4.9 , Protien 8.37 )',
                image:'https://b.zmtcdn.com/data/dish_photos/9ac/0a8168d8c98c3fbb833dc9f1b46379ac.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:42,
                name:'Authentic Veggie Pizza (Regular )',
                price:290,
                desc:'Green Capsicum, Crunchy Onion, Spiced Paneer In Jalapeno Sauce. Nutritional Information As Per 100 Gms (calories 300.57 Kacl , Fat 13.37 , Cholesterol 7 , Carbohydrate 36.69 , Sugar 4.9 , Protien 8.37 )',
                image:'https://b.zmtcdn.com/data/dish_photos/9ac/0a8168d8c98c3fbb833dc9f1b46379ac.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:43,
                name:'Authentic Veggie Pizza (Regular )',
                price:290,
                desc:'Green Capsicum, Crunchy Onion, Spiced Paneer In Jalapeno Sauce. Nutritional Information As Per 100 Gms (calories 300.57 Kacl , Fat 13.37 , Cholesterol 7 , Carbohydrate 36.69 , Sugar 4.9 , Protien 8.37 )',
                image:'https://b.zmtcdn.com/data/dish_photos/9ac/0a8168d8c98c3fbb833dc9f1b46379ac.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:44,
                name:'Mexican Casa Pizza',
                price:209,
                desc:'Crunchy Onion, Golden Corn & Sliced Jalapeno . Nutritional Information As Per 100 Gms (calories 319.5 Kacl , Fat 18.7 , Cholesterol 15 , Carbohydrate 26.9 , Sugar 2.4 , Protien 10.9 )',
                image:'https://b.zmtcdn.com/data/dish_photos/74b/26d09ab8dfaa8335b69a22283929d74b.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:45,
                name:'Margherita Pizza',
                price:149,
                desc:'Crunchy Onion, Golden Corn & Sliced Jalapeno . Nutritional Information As Per 100 Gms (calories 319.5 Kacl , Fat 18.7 , Cholesterol 15 , Carbohydrate 26.9 , Sugar 2.4 , Protien 10.9 )',
                image:'https://b.zmtcdn.com/data/dish_photos/27c/0d17a8b63de35b7421e1a3fa4502027c.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
        ]
    },
    {
        id: 11,
        name: "Jugaadi Adda",
        image: 'https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg',
        dishes: 'Maharashtrian, Street Food',
        DeliveryTime: 20,
        Dining_Reviews: 0,
        Delivery_Reviews: 4.0,
        location: 'Paldi, Ahmedabad',
        openTime: '9:15am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:46,
                name:'Jantar Mantar Vada Pav',
                price:45,
                desc:'Iceberg, tomato, capsicum, onion topped with 3 secret sauses and orange cheese with bbq',
                image:'https://b.zmtcdn.com/data/dish_photos/9fc/25bfe5d1fc9d5b21ea94b60eaf94e9fc.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:47,
                name:'Machayenge Vada Pav',
                price:40,
                desc:'Jo nhi khata usko bhi teekha khilayenge The perfect combination of spicy and tangy taste',
                image:'https://b.zmtcdn.com/data/dish_photos/510/dac8f4c8191327925cde859ea7a5f510.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:48,
                name:'Schezwan Vada Pav',
                price:35,
                desc:'Hot n spicy schezwan to entice your taste bud',
                image:'https://b.zmtcdn.com/data/dish_photos/570/5b4711281b5594f0dd6acb60f79a3570.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:49,
                name:'VIP Vada Pav',
                price:45,
                desc:'A proper blend of orange cheese with tandoori base and a hint of bbq with veggies like iceberg, tomato, capsicum and onion',
                image:'https://b.zmtcdn.com/data/dish_photos/aa2/6c07aa0d440e555adfe6b0834b24eaa2.jpg?fit=around|130:130&crop=130:130;*,*',
            },
        ]
    },
    {
        id: 12,
        name: "Burger Farm",
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/20510753/aaebf1547278ff4852e8be706b2cb3fe_o2_featured_v2.jpg',
        discount: 20,
        dishes: 'Burger, Fast Food, Coffee, Shake, Wraps, Beverages',
        DeliveryTime: 24,
        Dining_Reviews: 3.9,
        Delivery_Reviews: 4.3,
        location: 'Navrangpura, Ahmedabad',
        openTime: '11am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:50,
                name:'Tedha Teekha Burger',
                price:90,
                desc:'Dare yourself to try the spiciest burger ever! Served with a blend of peppery sauces crowned with the tender bun',
                image:'https://b.zmtcdn.com/data/dish_photos/89f/ef336061a7ff7da0e287e59e624fe89f.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:51,
                name:'Go Green',
                price:124,
                desc:'Do not miss our yummy spinach and corn patty burger (medium spicy) served with the freshness of healthy veggies, rich & creamy mayo & tangy sauces.',
                image:'https://b.zmtcdn.com/data/dish_photos/096/b0647b1cdbe951a8d28a386d0adda096.png?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:52,
                name:'Farm Cheese Burst Burger',
                price:224,
                desc:'Indulge in heavenly bliss of oozing cheese with the combination of mouthwatering sauces with goodness of onions, lettuce and jalapenos and farm special mouthwatering sauces.',
                image:'https://b.zmtcdn.com/data/dish_photos/cd6/92563395690ef29f823b90550840acd6.png?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:53,
                name:'Cappuccino',
                price:119,
                desc:'Shot of coffee blended with rich, creamy milk and froth on the top.',
                image:'https://b.zmtcdn.com/data/dish_photos/dab/dfe7e14595d18d539a72f633055eadab.jpg?fit=around|130:130&crop=130:130;*,*',
            },
        ]
    },
    {
        id: 13,
        name: "Shakti The Sandwich Shop",
        image: 'https://b.zmtcdn.com/data/pictures/chains/8/113158/afbb6229560a56525ba6f72f24074fff_o2_featured_v2.jpg',
        discount: 50,
        dishes: 'Sandwich, Wraps, Pizza, Burger, Fast Food, Shake, Beverages',
        DeliveryTime: 22,
        Dining_Reviews: 3.6,
        Delivery_Reviews: 4.0,
        location: 'Ellis Bridge, Ahmedabad',
        openTime: '11am',
        CloseTime: '11pm',
        Foods:[
            {
                id:54,
                name:'Cheese Masala Sandwich',
                price:180,
                desc:'Mozzarella Cheese With Onion Tomato & Capsicum',
                image:'https://b.zmtcdn.com/data/dish_photos/488/19e84a0588eee964d66a06befaf53488.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:55,
                name:'Schezwan Grilled Sandwich',
                price:190,
                desc:'House Special Schezwan Sauce With Veggies And Cheese',
                image:'https://b.zmtcdn.com/data/dish_photos/d9a/151920c5393ce708731cf458acb43d9a.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:56,
                name:'Americana Exotica Sandwich',
                price:170,
                desc:'The Shakti Special Exotica Stuffing With Cheese Corn & Olives',
                image:'https://b.zmtcdn.com/data/dish_photos/c44/98302e4c074a7e860454d827f2201c44.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:57,
                name:'Indiana Exotica Sandwich',
                price:170,
                desc:'The Shakti Special Exotica Stuffing With Coriander, Green Chillies & Olives',
                image:'https://b.zmtcdn.com/data/dish_photos/488/19e84a0588eee964d66a06befaf53488.jpg?fit=around|130:130&crop=130:130;*,*',
            },]
    },
    {
        id: 14,
        name: "Hocco Eatery",
        image: 'https://b.zmtcdn.com/data/pictures/chains/5/110155/b4a5410c46439d6b8912f4bd0071bf24_o2_featured_v2.jpg',
        discount: 30,
        dishes: 'Pizza, Sandwich, Fast Food, Street Food, Ice Cream, Desserts, Shake',
        DeliveryTime: 22,
        Dining_Reviews: 4.0,
        Delivery_Reviews: 4.0,
        location: 'Ellis Bridge, Ahmedabad',
        openTime: '11am',
        CloseTime: '12:30am',
        Foods:[
            {
                id:54,
                name:'Hyderabadi Veg Dumpukht Biryani (350gm)',
                price:309.52,
                desc:'A layered rice dish cooked with fragrant spices, vegetables, and saffron, cooked to perfection for an exquisite taste!',
                image:'https://b.zmtcdn.com/data/dish_photos/fc2/d17d7dfa81bf076fd8581b9b287f0fc2.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:55,
                name:'Hocco Special Italian Farmhouse [25 Cm]',
                price:390.48,
                desc:'Check out this mouthwatering overload of veggies over tomato-based sauce topped with chipotle sauce',
                image:'https://b.zmtcdn.com/data/dish_photos/29f/bb1c886cd7dbbf5b7e0c928bd359c29f.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:56,
                name:'Cheese And Herb Rice 350gm',
                price:256.19,
                desc:'Aromatic rice infused with savory cheese and fragrant herbs, a delightful and flavorful dish!',
                image:'https://b.zmtcdn.com/data/dish_photos/0eb/685821376eb6107bc2dff457a88580eb.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:57,
                name:'Vegetables Cutlets [2 Pcs]',
                price:114.29,
                desc:'Savory vegetable cutlets, a flavorful blend of mixed veggies, potatoes, and spices, crisped to perfection. Recipe unchanged for the last 40 years!',
                image:'https://b.zmtcdn.com/data/dish_photos/267/a4df87b161440b44fdfd105284a17267.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
        ]
    },
    {
        id: 15,
        name: "Martino'z Pizza",
        image: 'https://b.zmtcdn.com/data/pictures/1/20686901/33d86bcffc824ed629089afa69c72515_o2_featured_v2.jpg',
        discount: 40,
        dishes: 'Pizza, Fast Food, Mexican',
        DeliveryTime: 22,
        Dining_Reviews: 0,
        Delivery_Reviews: 4.0,
        location: 'Paldi, Ahmedabad',
        openTime: '11am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:59,
                name:'Cheesy Combo',
                price:749,
                desc:'Save 150 on this combo. 9 Cheesy (Medium) Paneer Tikka Garlic Bread Coke (750ml)',
                image:'https://b.zmtcdn.com/data/dish_photos/81d/21c455aca420d12db1a758c9c044481d.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:60,
                name:'Family Combo',
                price:1029,
                desc:'Save 171 on this combo. Peri-Peri Pizza (Large) Cheesy Garlic Bread White Sauce Pasta Choco Lava Coke (750ml)',
                image:'https://b.zmtcdn.com/data/dish_photos/c69/0468c37a925697d2b707157b7ce8bc69.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:61,
                name:'Single Regular Veg Pack Of 4',
                price:369,
                desc:'"Onion|Tomatoes|Capsicum|Sweet Corn Regular Size "',
                image:'https://b.zmtcdn.com/data/dish_photos/9a5/8ade76dd75f04be021fb2d74105aa9a5.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:62,
                name:'Farm Fresh',
                price:240,
                desc:'It Is Oh So Indian Juicy Paneer With Tangy Tomatoes,, onion Crisp Broccoli And Spicy Red Paprika With Loads Of Mozzarella And Cheddar Blend',
                image:'https://b.zmtcdn.com/data/dish_photos/a5f/d59039d1f783680638bf42c451a44a5f.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
        ]
    },
    {
        id: 16,
        name: "Starbucks Coffee",
        image: 'https://b.zmtcdn.com/data/pictures/chains/6/19171726/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg',
        discount: 20,
        dishes: 'Cafe, Coffee, Fast Food, Beverages, Desserts',
        DeliveryTime: 17,
        Dining_Reviews: 0,
        Delivery_Reviews: 4.1,
        location: 'C G Road, Ahmedabad',
        openTime: '8am',
        CloseTime: '12midnight',
        Foods:[
            {
                id:63,
                name:'Tall Java Chip Frappuccino',
                price:340,
                desc:'We blend mocha sauce and Frappuccino chips with Frappuccino roast coffee and milk and ice',
                image:'https://b.zmtcdn.com/data/dish_photos/79d/28ce00688861423b99ac813b0cd6979d.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:64,
                name:'Caramel Frappuccino',
                price:340,
                desc:'A blend of coffee, sweet caramel syrup, milk and ice topped with whipped cream and a swirl of caramel drizzle. Energy',
                image:'https://b.zmtcdn.com/data/dish_photos/d97/6b7398272b414b14f6d9781d3591bd97.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:65,
                name:'Vanilla Sweet Cream Cold Brew',
                price:390,
                desc:'Cold brew with Vanilla Sweet Cream is made with Starbucks cold brew over ice and topped with a house made vanilla sweet cream',
                image:'https://b.zmtcdn.com/data/dish_photos/5f8/820837b19ee3ff7d36c7fb46762945f8.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:66,
                name:'Caffe Latte',
                price:270,
                desc:'Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up.',
                image:'https://b.zmtcdn.com/data/dish_photos/46f/879e3f36c309519bd089ce9a8d13746f.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
        ]
    },
    {
        id: 17,
        name: "Tea Post",
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/112843/acc19ec8e3df68375b57566d1fac324d_o2_featured_v2.jpg',
        discount: 50,
        dishes: 'Tea, Coffee, Shake, Beverages, Sandwich, Fast Food, Street Food',
        DeliveryTime: 29,
        Dining_Reviews: 2.7,
        Delivery_Reviews: 3.6,
        location: 'Ashram Road, Ahmedabad',
        openTime: '8:45am',
        CloseTime: '11pm',
        Foods:[
            {
                id:67,
                name:'Chai Maska Bun Combo',
                price:230,
                desc:'Try our delicious Maska Bun - laced with Dollops of Butter with your choice of tea - to make one of the most amazing Desi tea time combos!',
                image:'https://b.zmtcdn.com/data/dish_photos/4cf/827e8ee0fa91bb8969e3d3eb3568f4cf.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:68,
                name:'Chai Maska Bun Combo',
                price:340,
                desc:'We blend mocha sauce and Frappuccino chips with Frappuccino roast coffee and milk and ice',
                image:'https://b.zmtcdn.com/data/dish_photos/79d/28ce00688861423b99ac813b0cd6979d.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:69,
                name:'Best Trinity Combo',
                price:325,
                desc:'Unleash the power of the trinity - with your favourite Chai, your favorite Maska Bun, and 2 pcs of delicious Samosa. Only for those who can handle it!',
                image:'https://b.zmtcdn.com/data/dish_photos/bdc/1375de94d0f9ad118bf9de28a5e8cbdc.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:70,
                name:'Snackoffee Combo',
                price:250,
                desc:'Try this delightful combo by picking your choice of puff and combining it with your favorite from our range of cold coffee. That is one irresistible combo there!',
                image:'https://b.zmtcdn.com/data/dish_photos/ec0/45e8260f20a4f881e1c6d4aba8fecec0.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            
        ]
    },
    {
        id: 18,
        name: "Vadilal Scoop Shop",
        image: 'https://b.zmtcdn.com/data/pictures/5/18427405/ffad1e14c45fbb47e62893af53b41ee6_o2_featured_v2.jpg',
        dishes: 'Ice Cream, Desserts, Beverages',
        DeliveryTime: 14,
        Dining_Reviews: 3.6,
        Delivery_Reviews: 4.6,
        location: 'Ellis Bridge, Ahmedabad',
        openTime: '10am',
        CloseTime: '10pm',
        Foods:[
            {
                id:71,
                name:'Rajbhog Ice Cream',
                price:84.75,
                desc:'Saffron ice cream with saffron (kesar), cashew, almond, pistachios and cardamom.',
                image:'https://b.zmtcdn.com/data/dish_photos/4cf/827e8ee0fa91bb8969e3d3eb3568f4cf.jpg?fit=around|130:130&crop=130:130;*,*',
            },           {
                id:72,
                name:'Blackcurrant Ice Cream',
                price:74.15,
                desc:'Black Currant Ice Cream [700 ml + 700 ml].',
                image:'https://b.zmtcdn.com/data/dish_photos/93c/cb3e4e4a84c60c9ba361ed89fd50593c.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:73,
                name:'Buy 1 Get 1 Badam Carnival Ice Cream [700 +700 ML] Free',
                price:288.145,
                desc:' Badam Carnival Ice Cream.',
                image:'https://b.zmtcdn.com/data/dish_photos/4cf/827e8ee0fa91bb8969e3d3eb3568f4cf.jpg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:74,
                name:'American Nuts Ice Cream [1 Tub, 1 litre]',
                price:220.34,
                desc:'Gourmet American nuts ice cream tub will make you go nuts over the rich and creamy deliciousness. Crafted with love, this flavor never fails to surprise you!',
                image:'https://b.zmtcdn.com/data/dish_photos/0ef/c56e2fac680f723dfb19f86fd250b0ef.jpg?fit=around|130:130&crop=130:130;*,*',
            },
        ]
    },

    {
        id: 19,
        name: "The Shake Maker",
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/113192/a806299167e5a28f8692a041b1cff1e2_o2_featured_v2.jpg',
        discount: 50,
        dishes: 'Shake, Beverages',
        DeliveryTime: 23,
        Dining_Reviews: 3.7,
        Delivery_Reviews: 4.1,
        location: 'Navrangpura, Ahmedabad',
        openTime: '11am',
        CloseTime: '11:30pm',
        Foods:[
            {
                id:75,
                name:'Kaju Anjeer Shake',
                price:220,
                desc:'',
                image:'https://b.zmtcdn.com/data/dish_photos/f6c/782fca12ab07025140a5d62b6b128f6c.jpeg?fit=around|130:130&crop=130:130;*,*',
            },
            {
                id:76,
                name:'Hide & Seek',
                price:200,
                desc:'',
                image:'https://b.zmtcdn.com/data/dish_photos/ba3/b45b1e461cddf0a8951ece333ed41ba3.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:77,
                name:'Mintoreo',
                price:200,
                desc:'',
                image:'https://b.zmtcdn.com/data/dish_photos/ac8/e74c775ca533bf28520b80887d223ac8.jpeg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:78,
                name:'Cocoraco',
                price:225,
                desc:'',
                image:'https://b.zmtcdn.com/data/dish_photos/79a/6bfae0783b40a358e79d3eb66bfcf79a.jpeg?fit=around|130:130&crop=130:130;*,*'
            }
            
        ]
    },

    {
        id: 20,
        name: "Real Paprika Express Outlet",
        image: 'https://b.zmtcdn.com/data/pictures/0/20298390/351d5e41b40f54c9af0f6a1313f4f989_o2_featured_v2.jpg',
        dishes: 'Pizza, Sandwich, Fast Food',
        DeliveryTime: 38,
        Dining_Reviews: 0,
        Delivery_Reviews: 3.5,
        location: 'Manek Chowk, Ahmedabad',
        openTime: '12noon',
        CloseTime: '12midnight',
        Foods:[
            {
             id:79,
             name:'Authentic Veg Pizza',
             price:155,
             desc:'Cheese, capsicum, jalepano, paneer,chilly, onion',
             image:'https://b.zmtcdn.com/data/dish_photos/e51/83f7436ccbb0b4f767375e9a27d69e51.jpg?fit=around|130:130&crop=130:130;*,*'
            },
            {
                id:80,
                name:'Indian Touch Pizza',
                price:155,
                desc:'Cheese, Tomato, capsicum, pineapple, olive',
                image:'https://b.zmtcdn.com/data/dish_photos/e18/f550ac261a3e285dfd55551153be9e18.jpg?fit=around|130:130&crop=130:130;*,*'
            }
        ]
    },


]


export default DeliveryRes;