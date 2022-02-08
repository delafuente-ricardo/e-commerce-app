// Used to seed products on firebase
export const products = [
  // Fruits
  {
    id: 1,
    name: 'Watermelon',
    category: 'fruits',
    desc: [
      'Watermelon is a sweet and refreshing low calorie summer snack. It provides hydration and also essential nutrients, including vitamins, minerals, and antioxidants.',
    ],
    price: 2400,
    weight: {
      value: 1,
      unit: 'unit',
    },
    nutrition: {
      unit: 'g',
      servingSize: 154,
      calories: 46,
      fat: 0.2,
      protein: 0.9,
      carbs: 12,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Fwatermelon.png?alt=media',
  },

  {
    id: 2,
    name: 'Kiwi',
    category: 'fruits',
    desc: [
      'The kiwifruit, or Chinese gooseberry, originally grew wild in China. Kiwis are a nutrient-dense food — they are rich in in nutrients and low in calories.',
    ],
    price: 600,
    weight: {
      value: 4,
      unit: 'units',
    },
    nutrition: {
      unit: 'g',
      servingSize: 180,
      calories: 104,
      fat: 0.8,
      protein: 1.9,
      carbs: 25,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Fkiwi.png?alt=media',
  },

  {
    id: 3,
    name: 'Strawberries',
    category: 'fruits',
    desc: [
      'Strawberries, like other berries, are rich in vitamins, minerals, fiber, and compounds with antioxidant and anti-inflammatory properties. As part of a nutritious diet, they can help prevent various conditions.',
    ],
    price: 500,
    weight: {
      value: 12,
      unit: 'units',
    },
    nutrition: {
      unit: 'g',
      servingSize: 152,
      calories: 49,
      fat: 0.5,
      protein: 1,
      carbs: 12,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Fstrawberries.png?alt=media',
  },

  {
    id: 4,
    name: 'Bananas',
    category: 'fruits',
    desc: [
      'Bananas are one of the most popular fruits worldwide and are a healthy source of fiber, potassium, vitamin B6, vitamin C, and various antioxidants and phytonutrients.',
    ],
    price: 180,
    weight: {
      value: 1,
      unit: 'bunch',
    },
    nutrition: {
      unit: 'g',
      servingSize: 225,
      calories: 200,
      fat: 0.7,
      protein: 2.5,
      carbs: 51,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Fbananas.png?alt=media',
  },

  {
    id: 5,
    name: 'Oranges',
    category: 'fruits',
    desc: [
      'Oranges are popular due to their natural sweetness, the many different types available, and the diversity of uses. For example, a person can consume them in juices and marmalades, eat them whole, or use zested peel to add a tangy flavor to cakes and desserts.',
    ],
    price: 450,
    weight: {
      value: 6,
      unit: 'units',
    },
    nutrition: {
      unit: 'g',
      servingSize: 180,
      calories: 85,
      fat: 0.2,
      protein: 1.7,
      carbs: 21,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Foranges.png?alt=media',
  },

  {
    id: 6,
    name: 'Grapes',
    category: 'fruits',
    desc: [
      'Grapes are a good source of fiber, potassium, and a range of vitamins and minerals. The nutrients in grapes may help protect against cancer, eye problems, cardiovascular disease, and other health conditions.',
    ],
    price: 2000,
    weight: {
      value: 1,
      unit: 'kg',
    },
    nutrition: {
      unit: 'g',
      servingSize: 150,
      calories: 104,
      fat: 0.2,
      protein: 1.1,
      carbs: 27,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Fgrapes.png?alt=media',
  },

  {
    id: 7,
    name: 'Apples',
    category: 'fruits',
    desc: [
      'Apples are a popular fruit, containing antioxidants, vitamins, dietary fiber, and a range of other nutrients. Due to their varied nutrient content, they may help prevent several health conditions.',
    ],
    price: 2000,
    weight: {
      value: 1,
      unit: 'kg',
    },
    nutrition: {
      unit: 'g',
      servingSize: 125,
      calories: 65,
      fat: 0.2,
      protein: 0.3,
      carbs: 17,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Fapples.png?alt=media',
  },

  {
    id: 8,
    name: 'Mango',
    category: 'fruits',
    desc: [
      'Mangoes are sweet, creamy fruits that have a range of possible health benefits. They are highly popular around the world.',
    ],
    price: 350,
    weight: {
      value: 1,
      unit: 'unit',
    },
    nutrition: {
      unit: 'g',
      servingSize: 165,
      calories: 99,
      fat: 0.6,
      protein: 1.4,
      carbs: 25,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Ffruits%2Fmango.png?alt=media',
  },

  // Vegetables
  {
    id: 9,
    name: 'Tomatoes',
    category: 'vegetables',
    desc: [
      'A tomato is a nutrient-dense superfood that offers benefit to a range of bodily systems. Its nutritional content supports healthful skin, weight loss, and heart health.',
    ],
    price: 275,
    weight: {
      value: 3,
      unit: 'units',
    },
    nutrition: {
      unit: 'g',
      servingSize: 180,
      calories: 32,
      fat: 0.4,
      protein: 1.6,
      carbs: 7,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fvegetables%2Ftomatoes.png?alt=media',
  },

  {
    id: 10,
    name: 'Carrots',
    category: 'vegetables',
    desc: [
      'It is crunchy, tasty, and highly nutritious. Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants',
    ],
    price: 300,
    weight: {
      value: 5,
      unit: 'units',
    },
    nutrition: {
      unit: 'g',
      servingSize: 128,
      calories: 52,
      fat: 0.3,
      protein: 1.2,
      carbs: 12,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fvegetables%2Fcarrots.png?alt=media',
  },

  {
    id: 11,
    name: 'Lettuce',
    category: 'vegetables',
    desc: [
      'Romaine lettuce is a crispy salad green with high nutritional value. Its vitamin and mineral content offers a range of health benefits, and there are many simple ways to add romaine lettuce to the diet.',
    ],
    price: 250,
    weight: {
      value: 1,
      unit: 'unit',
    },
    nutrition: {
      unit: 'g',
      servingSize: 35,
      calories: 4.9,
      fat: 0,
      protein: 0.4,
      carbs: 1,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fvegetables%2Flettuce.png?alt=media',
  },

  {
    id: 12,
    name: 'Broccoli',
    category: 'vegetables',
    desc: [
      'Broccoli has a reputation as a superfood. It is low in calories but contains a wealth of nutrients and antioxidants that support many aspects of human health.',
    ],
    price: 250,
    weight: {
      value: 1,
      unit: 'unit',
    },
    nutrition: {
      unit: 'g',
      servingSize: 91,
      calories: 31,
      fat: 0.3,
      protein: 2.6,
      carbs: 6,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fvegetables%2Fbroccoli.png?alt=media',
  },

  {
    id: 13,
    name: 'Onions',
    category: 'vegetables',
    desc: [
      'Onions belong to the Allium family of plants, which also includes chives, garlic, and leeks. These vegetables have characteristic pungent flavors and some medicinal properties.',
    ],
    price: 200,
    weight: {
      value: 3,
      unit: 'units',
    },
    nutrition: {
      unit: 'g',
      servingSize: 160,
      calories: 64,
      fat: 0.2,
      protein: 1.8,
      carbs: 15,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fvegetables%2Fonions.png?alt=media',
  },

  // Nuts & Seeds
  {
    id: 14,
    name: 'Walnuts',
    category: 'nuts',
    desc: [
      'Walnuts are round, single-seeded stone fruits that grow from the walnut tree. They are a good source of healthful fats, protein, and fiber. They may enhance heart and bone health and help in weight management, among other benefits.',
    ],
    price: 600,
    weight: {
      value: 300,
      unit: 'g',
    },
    nutrition: {
      unit: 'g',
      servingSize: 28,
      fat: 18,
      protein: 4.3,
      carbs: 3.9,
      calories: 185,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fnuts%2Fwalnuts.png?alt=media',
  },

  {
    id: 15,
    name: 'Pistachios',
    category: 'nuts',
    desc: [
      'Pistachios are a type of tree nut with numerous health benefits. Pistachios are an excellent source of protein, antioxidants, and fiber.',
    ],
    price: 1500,
    weight: {
      value: 500,
      unit: 'g',
    },
    nutrition: {
      unit: 'g',
      servingSize: 28,
      fat: 13,
      protein: 5.9,
      carbs: 7.8,
      calories: 165,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fnuts%2Fpistachios.png?alt=media',
  },

  {
    id: 16,
    name: 'Almonds',
    category: 'nuts',
    desc: [
      "Almonds contain vitamins, minerals, protein, and fiber, and so they may offer a number of health benefits. Just a handful of almonds — approximately 1 ounce — contains one-eighth of a person's daily protein needs.",
    ],
    price: 1000,
    weight: {
      value: 450,
      unit: 'g',
    },
    nutrition: {
      unit: 'g',
      servingSize: 28,
      fat: 15,
      protein: 5.7,
      carbs: 5.7,
      calories: 170,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fnuts%2Falmonds.png?alt=media',
  },

  {
    id: 17,
    name: 'Peanuts',
    category: 'nuts',
    desc: [
      'Peanuts have a strong nutritional profile. They are an excellent source of plant-based protein, fiber, and many key vitamins and minerals.',
    ],
    price: 1000,
    weight: {
      value: 500,
      unit: 'g',
    },
    nutrition: {
      unit: 'g',
      servingSize: 28,
      fat: 14,
      protein: 7,
      carbs: 4.6,
      calories: 161,
    },
    image:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fnuts%2Fpeanuts.png?alt=media',
  },
];

export default products;
