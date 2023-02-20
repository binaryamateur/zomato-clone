const BREAKPOINTS = {
    phoneAndDown: 550,
    tabletAndDown: 1100
};

const PICTURES = [

    {food: "Pizza",
    url: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {food: "Burger",
    url: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {food: "Momos",
    url: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    {food: "Noodles",
    url: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {food: "Chaat",
    url: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
    {food: "Rolls",
    url: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },

    {food: "Chicken",
    url: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },

    {food: "Paneer",
    url: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },

    {food: "Biryani",
    url: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },

    {food: "Thali",
    url: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },

    {food: "Sandwich",
    url: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },

    {food: "Fried Rice",
    url: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    },

];


const LIST = [

    {filter: -1,
    restaurantList: [{
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    },
    {
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    },
    {
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    },
    {
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    },
    {
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    }
    ,{
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    }
    ,{
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    },
    {
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    }
    ,{
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    }
    ,{
        name: "Carribean Pizza",
        imgUrl: "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg",
        off: 50,
        upto: 100,
        time: 26,
        rating: 3.1,
        types: "North Indian, Chinese, Mughlai",
        cost: 300,
        order_placed: 1125
    }]},
    {
        filter: 0,
        restaurantList: [
            {
                name: "Domino's Pizza",
                imgUrl: "https://b.zmtcdn.com/data/pictures/3/19048143/e65807a27ea1ae58175bde46ca4e75d9_o2_featured_v2.jpg?output-format=webp",
                off: 30,
                upto: 75,
                time: 31,
                rating: 3.8,
                types: "Italian",
                cost: 250,
                order_placed: 800
            },
            {
                name: "Domino's Pizza",
                imgUrl: "https://b.zmtcdn.com/data/pictures/3/19048143/e65807a27ea1ae58175bde46ca4e75d9_o2_featured_v2.jpg?output-format=webp",
                off: 30,
                upto: 75,
                time: 31,
                rating: 3.8,
                types: "Italian",
                cost: 250,
                order_placed: 800
            },
            {
                name: "Domino's Pizza",
                imgUrl: "https://b.zmtcdn.com/data/pictures/3/19048143/e65807a27ea1ae58175bde46ca4e75d9_o2_featured_v2.jpg?output-format=webp",
                off: 30,
                upto: 75,
                time: 31,
                rating: 3.8,
                types: "Italian",
                cost: 250,
                order_placed: 800
            },
            {
                name: "Domino's Pizza",
                imgUrl: "https://b.zmtcdn.com/data/pictures/3/19048143/e65807a27ea1ae58175bde46ca4e75d9_o2_featured_v2.jpg?output-format=webp",
                off: 30,
                upto: 75,
                time: 31,
                rating: 3.8,
                types: "Italian",
                cost: 250,
                order_placed: 800
            },
        ]
    },
    {
        filter: 1,
        restaurantList: [
            {
                name: "Burger King",
                imgUrl: "https://b.zmtcdn.com/data/pictures/chains/1/19841191/2a1d782dc369c9f834159b0ec112cd39_o2_featured_v2.jpg",
                off: 15,
                upto: 150,
                time: 15,
                rating: 4.1,
                types: "American",
                cost: 150,
                order_placed: 3100
            },
            {
                name: "Burger King",
                imgUrl: "https://b.zmtcdn.com/data/pictures/chains/1/19841191/2a1d782dc369c9f834159b0ec112cd39_o2_featured_v2.jpg",
                off: 15,
                upto: 150,
                time: 15,
                rating: 4.1,
                types: "American",
                cost: 150,
                order_placed: 3100
            },
            {
                name: "Burger King",
                imgUrl: "https://b.zmtcdn.com/data/pictures/chains/1/19841191/2a1d782dc369c9f834159b0ec112cd39_o2_featured_v2.jpg",
                off: 15,
                upto: 150,
                time: 15,
                rating: 4.1,
                types: "American",
                cost: 150,
                order_placed: 3100
            }
        ]
    },
    {filter: 2,
    restaurantList:[
        {name: "Momo Maami",
        imgUrl: "https://b.zmtcdn.com/data/dish_photos/831/441e854f94d1eae99467e5e8ab3e0831.jpg?output-format=webp",
        off: 30,
        upto: 75,
        time: 31,
        rating: 3.8,
        types: "Chinese",
        cost: 200,
        order_placed: 500
    },
    {name: "Momo Maami",
    imgUrl: "https://b.zmtcdn.com/data/dish_photos/831/441e854f94d1eae99467e5e8ab3e0831.jpg?output-format=webp",
    off: 30,
    upto: 75,
    time: 31,
    rating: 3.8,
    types: "Chinese",
    cost: 200,
    order_placed: 500
    },
    {name: "Momo Maami",
        imgUrl: "https://b.zmtcdn.com/data/dish_photos/831/441e854f94d1eae99467e5e8ab3e0831.jpg?output-format=webp",
        off: 30,
        upto: 75,
        time: 31,
        rating: 3.8,
        types: "Chinese",
        cost: 200,
        order_placed: 500
    },
    {name: "Momo Maami",
        imgUrl: "https://b.zmtcdn.com/data/dish_photos/831/441e854f94d1eae99467e5e8ab3e0831.jpg?output-format=webp",
        off: 30,
        upto: 75,
        time: 31,
        rating: 3.8,
        types: "Chinese",
        cost: 200,
        order_placed: 500
    },
    {name: "Momo Maami",
        imgUrl: "https://b.zmtcdn.com/data/dish_photos/831/441e854f94d1eae99467e5e8ab3e0831.jpg?output-format=webp",
        off: 30,
        upto: 75,
        time: 31,
        rating: 3.8,
        types: "Chinese",
        cost: 200,
        order_placed: 500
    },
    ]},
   
];

export {BREAKPOINTS, PICTURES, LIST};