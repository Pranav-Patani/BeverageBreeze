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
  },
  {
    _id: uuid(),
    categoryName: "Juices",
    description:
      "Health concious? We have got you covered. Have a look at some fresh juices that will satisfy your diet plan and your taste buds!",
  },
  {
    _id: uuid(),
    categoryName: "Non-Alcoholic Beers",
    description:
      "Friends coming over for a party? What can be better than having the real thing and still be sober. Explore the wide range of our Non-Alcoholic Beers and cheer up your party! ",
  },
];
