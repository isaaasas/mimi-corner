// src/data/productsData.js
import coolDive1 from "../assets/coolDive1.jpeg";
import coolDive2 from "../assets/coolDive2.jpeg";
import bebe1 from "../assets/bebe1.jpeg";
import bebe2 from "../assets/bebe2.jpeg";
import seoul1 from "../assets/seoul1.jpeg";
import seoul2 from "../assets/seoul2.jpeg";
import mask from "../assets/mask.jpg";
import cream from "../assets/cream.webp";
import cheek1 from "../assets/cheek1.jpeg";
import cheek2 from "../assets/cheek2.webp";
import powder1 from "../assets/powder1.jpeg";
import powder2 from "../assets/powder2.webp";

export const products = [
  {
    id: 1,
    name: "AMUSE Jel-Fit Tint 12 Cool Dive",
    price: 31920,
    image: coolDive1,
    hoverImage: coolDive2,
    category: "sale",
  },
  {
    id: 2,
    name: "AMUSE BEBE TINT 01 BOKSOONGA LOVE",
    price: 31920,
    image: bebe1,
    hoverImage: bebe2,
    category: "viral",
  },
  {
    id: 3,
    name: "AMUSE Jel-Fit Tint 06 Seoul Girl",
    price: 31920,
    image: seoul1,
    hoverImage: seoul2,
    category: "new",
  },
  {
    id: 4,
    name: "Jigott 10ш Маскны багц",
    price: 9900,
    image: mask,
    category: "sale",
  },
  {
    id: 5,
    name: "DR.ALTHEA 345 Relief Cream",
    price: 59900,
    image: cream,
    category: "viral",
  },
  {
    id: 6,
    name: "BETTER THAN CHEEK c03 FIG CHIP",
    price: 24900,
    image: cheek1,
    hoverImage: cheek2,
  },
  {
    id: 7,
    name: "No.1 Pantothenic Skincare 100 Powder",
    price: 37710,
    image: powder1,
    hoverImage: powder2,
    }
];
