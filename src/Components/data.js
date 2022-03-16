// import react from "react";

export const data = [
  // Sample Data file for the project
  {
    id: 1,
    date: "01-10-22",
    item: "Papaya",
    price: 100,
    quantitypurchased: 1000,
    unit: "grams",
    quantitysold: 0,
    costcollected: 0,
    imageURL:
      "https://media.istockphoto.com/photos/halved-and-whole-papaya-fruits-on-white-background-picture-id104638864?s=612x612",
  },
  {
    id: 2,
    date: "01-01-22",
    item: "Carrot",
    price: 50,
    quantitypurchased: 2000,
    unit: "grams",
    quantitysold: 0,
    costcollected: 0,
    imageURL:
      "https://image.shutterstock.com/image-photo/carrot-isolated-on-white-background-600w-795704785.jpg",
  },
  {
    id: 3,
    date: "01-02-22",
    item: "Brinjal",
    price: 60,
    quantitypurchased: 1500,
    unit: "grams",
    quantitysold: 0,
    costcollected: 0,
    imageURL:
      "https://media.istockphoto.com/photos/eggplant-isolated-on-white-picture-id510515443?s=612x612",
  },
  {
    id: 4,
    date: "01-02-22",
    item: "Peas",
    price: 70,
    quantitypurchased: 1500,
    unit: "grams",
    quantitysold: 0,
    costcollected: 0,
    imageURL:
      "https://media.istockphoto.com/photos/green-peas-on-white-background-picture-id1133566291?s=612x612",
  },
  {
    id: 5,
    date: "01-02-22",
    item: "Potato",
    price: 30,
    quantitypurchased: 1500,
    unit: "grams",
    quantitysold: 0,
    costcollected: 0,
    imageURL:
      "https://media.istockphoto.com/photos/three-potatoes-picture-id157430678",
  },
  {
    id: 6,
    date: "01-02-22",
    item: "Onion",
    price: 130,
    quantitypurchased: 1500,
    unit: "grams",
    quantitysold: 0,
    costcollected: 0,
    imageURL:
      "https://media.istockphoto.com/photos/onion-picture-id171325051?s=612x612",
  },
];

export const fields = [
  // Field definition for Material UI Table - Data Grid
  {
    headerName: "ID",
    field: "id",
    description: "Id should be unique",
    width: 75,
  },
  { headerName: "Item", field: "item", width: 100, description: "Item name" },
  { headerName: "Date", field: "date", width: 100 },
  {
    headerName: "Price",
    field: "price",
    width: 75,
    description: "Sale cost/Kg",
    valueFormatter: (params) => {
      return ` Rs  ${params.value}`;
    },
  },
  { headerName: "Purchase(grams)", field: "quantitypurchased", width: 60 },
  { headerName: "Sold(grams)", field: "quantitysold", width: 60 },
  {
    headerName: "Revenue",
    field: "costcollected",
    width: 60,
    description: "Amount collected till now",
  },
  { headerName: "imageURL", field: "Image URL", width: 150 },
];
