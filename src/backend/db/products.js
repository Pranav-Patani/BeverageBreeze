import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Coca-Cola",
    brand: "Coca-Cola",
    price: "35",
    originalPrice: "40",
    volume: "300 ml",
    imgUrl:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    categoryName: "Soft Drinks",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "Pepsi",
    brand: "PepsiCo",
    price: "35",
    originalPrice: "40",
    volume: "300 ml",
    imgUrl:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80",
    categoryName: "Soft Drinks",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "Mountain Dew",
    brand: "PepsiCo",
    price: "35",
    originalPrice: "40",
    volume: "300 ml",
    imgUrl:
      "https://images.unsplash.com/photo-1632161927166-0aea13d8f7e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1549&q=80",
    categoryName: "Soft Drinks",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "Sprite",
    brand: "PepsiCo",
    price: "35",
    originalPrice: "40",
    volume: "300 ml",
    imgUrl:
      "https://images.unsplash.com/photo-1680404005217-a441afdefe83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    categoryName: "Soft Drinks",
    rating: "3",
  },
  {
    _id: uuid(),
    name: "Fanta- Zero Sugar",
    brand: "Coca-Cola",
    price: "35",
    originalPrice: "40",
    volume: "300 ml",
    imgUrl:
      "https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=503&q=80",
    categoryName: "Soft Drinks",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "7up",
    brand: "PepsiCo",
    price: "35",
    originalPrice: "40",
    volume: "300 ml",
    imgUrl:
      "https://images.unsplash.com/photo-1688075962599-457e372cb933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    categoryName: "Soft Drinks",
    rating: "3",
  },
  {
    _id: uuid(),
    name: "ThumbsUp",
    brand: "Coca-Cola",
    price: "35",
    originalPrice: "40",
    volume: "300 ml",
    imgUrl:
      "https://images.unsplash.com/photo-1628340814848-17c9d6ba00b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    categoryName: "Soft Drinks",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "Orange Juice",
    brand: "Beverage Breeze",
    price: "100",
    originalPrice: "120",
    volume: "1 L",
    imgUrl:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    categoryName: "Juices",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "Pomegranate Juice",
    brand: "Beverage Breeze",
    price: "120",
    originalPrice: "140",
    volume: "1 L",
    imgUrl:
      "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    categoryName: "Juice",
    rating: "3",
  },
  {
    _id: uuid(),
    name: "Mango Juice",
    brand: "Beverage Breeze",
    price: "140",
    originalPrice: "150",
    volume: "1 L",
    imgUrl:
      "https://images.unsplash.com/photo-1587015990127-424b954e38b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    categoryName: "Juices",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "Apple Juice",
    brand: "Beverage Breeze",
    price: "125",
    originalPrice: "130",
    volume: "1 L",
    imgUrl:
      "https://images.unsplash.com/photo-1599683305314-8b6bf891e058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    categoryName: "Juices",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "Watermelon Juice",
    brand: "Beverage Breeze",
    price: "100",
    originalPrice: "120",
    volume: "1 L",
    imgUrl:
      "https://images.unsplash.com/photo-1597306691225-69ef217a43cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=376&q=80",
    categoryName: "Juices",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "Pineapple Juice",
    brand: "Beverage Breeze",
    price: "100",
    originalPrice: "120",
    volume: "1 L",
    imgUrl:
      "https://images.unsplash.com/photo-1596392301391-e8622b210bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    categoryName: "Juices",
    rating: "3",
  },
  {
    _id: uuid(),
    name: "Stella Artois",
    brand: "Interbrew International B.V.",
    price: "120",
    originalPrice: "140",
    volume: "300ml",
    imgUrl:
      "https://images.unsplash.com/photo-1506916278879-dc0a599e3885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=397&q=80",
    categoryName: "Non-Alcoholic Beers",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "Heineken",
    brand: "Heineken Corporation",
    price: "99",
    originalPrice: "110",
    volume: "300ml",
    imgUrl:
      "https://images.unsplash.com/photo-1630704651147-954b383c1754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    categoryName: "Non-Alcoholic Beers",
    rating: "3",
  },
  {
    _id: uuid(),
    name: "Sangria Senorial",
    brand: "Mezgo S.A. de C.V. ",
    price: "200",
    originalPrice: "220",
    volume: "300ml",
    imgUrl:
      "https://images.unsplash.com/photo-1600456551673-a6f30e625ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    categoryName: "Non-Alcoholic Beers",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "Budweiser",
    brand: "Anheuser-Busch Companies, Inc.",
    price: "99",
    originalPrice: "110",
    volume: "300ml",
    imgUrl:
      "https://images.unsplash.com/photo-1642647237318-3e30ff181a3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    categoryName: "Non-Alcoholic Beers",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "Bavaria",
    brand: "Bavaria",
    price: "99",
    originalPrice: "110",
    volume: "300ml",
    imgUrl:
      "https://images.unsplash.com/photo-1499424474736-c040d0665d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
    categoryName: "Non-Alcoholic Beers",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "Cruzcampo",
    brand: "Heineken corporation",
    price: "100",
    originalPrice: "120",
    volume: "300ml",
    imgUrl:
      "https://images.unsplash.com/photo-1677754597893-80407753a9f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    categoryName: "Non-Alcoholic Beers",
    rating: "5",
  },
];
