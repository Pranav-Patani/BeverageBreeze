import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Soft Drinks",
    description:
      "Dive into the variety of some refreshing soft drinks that will cheer you up for your day!",
    imgUrl:
      "https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNvZnQlMjBkcmlua3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Juices",
    description:
      "Health concious? We have got you covered. Have a look at some fresh juices that will satisfy your diet plan and your taste buds!",
    imgUrl:
      "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anVpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Non-Alcoholic Beers",
    description:
      "Explore the wide range of our Non-Alcoholic Beers and keep your parties sober without compromising the fun!",
    imgUrl:
      "https://images.unsplash.com/photo-1473429174434-a8a8d5e0dc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];
