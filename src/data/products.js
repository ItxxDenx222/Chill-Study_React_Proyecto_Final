import imagenAffogato from '../assets/affogato.jpg';
import imagenAmericano from '../assets/americano.jpg';
import imagenCapuchino from '../assets/capuchino.jpg';
import imagenCortado from '../assets/cortado.jpg';
import imagenEspresso from '../assets/espresso.jpg';
import imagenFlatWhite from '../assets/Flat-White.jpg';
import imagenLatteDulce from '../assets/latte-dulce.jpg';
import imagenLatteFrio from '../assets/latte-frio.webp';
import imagenMacchiato from '../assets/machiatto.webp';
import imagenMochaFrio from '../assets/mocha-frio.jpg';
import imagenMocha from '../assets/mocha.jpg';

export const productsData = [
  {
    id: 1,
    title: "Affogato",
    category: "postre",
    price: "$20.000",
    rating: 4.9,
    reviews: 120,
    badge: "Top Pick",
    img: imagenAffogato,
    shortDesc: "Delicioso postre italiano preparado con una bola de helado de vainilla bañada con un espresso caliente.",
    fullDesc: "Delicioso postre italiano preparado con una bola de helado de vainilla bañada con un espresso caliente, ofreciendo un contraste perfecto entre frío y caliente."
  },
  {
    id: 2,
    title: "Flat-White",
    category: "caliente",
    price: "$15.000",
    rating: 4.8,
    reviews: 95,
    badge: null,
    img: imagenFlatWhite,
    shortDesc: "Doble espresso y leche vaporizada con una fina capa de microespuma, logrando un equilibrio perfecto.",
    fullDesc: "Doble espresso y leche vaporizada con una fina capa de microespuma, logrando un equilibrio perfecto entre la intensidad del café y la suavidad de la leche."
  },
  {
    id: 3,
    title: "Americano",
    category: "caliente",
    price: "$12.000",
    rating: 4.7,
    reviews: 80,
    badge: null,
    img: imagenAmericano,
    shortDesc: "Espresso diluido con agua caliente, manteniendo todo el cuerpo y sabor tradicional del café.",
    fullDesc: "Espresso diluido con agua caliente, manteniendo todo el cuerpo y sabor tradicional del café para disfrutar por más tiempo."
  },
  {
    id: 4,
    title: "Capuchino",
    category: "caliente",
    price: "$16.000",
    rating: 4.9,
    reviews: 110,
    badge: "Popular",
    img: imagenCapuchino,
    shortDesc: "Clásico café con partes iguales de espresso, leche vaporizada y abundante espuma.",
    fullDesc: "Clásico café italiano con partes iguales de espresso, leche vaporizada y abundante espuma de leche, decorado con un toque de cacao."
  },
  {
    id: 5,
    title: "Cortado",
    category: "caliente",
    price: "$14.000",
    rating: 4.6,
    reviews: 65,
    badge: null,
    img: imagenCortado,
    shortDesc: "Espresso tradicional rebajado con una pequeña cantidad de leche tibia para suavizar su fuerza.",
    fullDesc: "Espresso tradicional rebajado con una pequeña cantidad de leche tibia para suavizar su fuerza sin perder el carácter principal del café."
  },
  {
    id: 6,
    title: "Espresso",
    category: "caliente",
    price: "$10.000",
    rating: 4.9,
    reviews: 150,
    badge: "Clásico",
    img: imagenEspresso,
    shortDesc: "Café puro, corto e intenso, extraído a alta presión para resaltar todos sus aromas.",
    fullDesc: "Café puro, corto e intenso, extraído a alta presión para resaltar todos sus aromas y notas características en cada sorbo."
  },
  {
    id: 7,
    title: "Latte Dulce",
    category: "caliente",
    price: "$18.000",
    rating: 4.8,
    reviews: 90,
    badge: null,
    img: imagenLatteDulce,
    shortDesc: "Suave café con abundante leche vaporizada y un toque especial de dulzor.",
    fullDesc: "Suave café con abundante leche vaporizada y un toque especial de dulzor, ideal para acompañar tus tardes de estudio."
  },
  {
    id: 8,
    title: "Latte Frío",
    category: "frio",
    price: "$18.000",
    rating: 4.7,
    reviews: 85,
    badge: "Refreshing",
    img: imagenLatteFrio,
    shortDesc: "Refrescante combinación de espresso, leche fría y cubos de hielo.",
    fullDesc: "Refrescante combinación de espresso, leche fría y cubos de hielo, perfecta para los días cálidos mientras estudias o trabajas."
  },
  {
    id: 9,
    title: "Macchiato",
    category: "caliente",
    price: "$13.000",
    rating: 4.6,
    reviews: 70,
    badge: null,
    img: imagenMacchiato,
    shortDesc: "Espresso manchado con una cucharada de espuma de leche fresca.",
    fullDesc: "Espresso tradicional manchado sutilmente con una cucharada de espuma de leche fresca para equilibrar la intensidad."
  },
  {
    id: 10,
    title: "Mocha Frío",
    category: "frio",
    price: "$19.000",
    rating: 4.9,
    reviews: 130,
    badge: "Sweet",
    img: imagenMochaFrio,
    shortDesc: "Deliciosa mezcla helada de espresso, leche, chocolate y hielo.",
    fullDesc: "Deliciosa mezcla helada de espresso, leche, sirope de chocolate y cubos de hielo, coronada con un toque irresistible."
  },
  {
    id: 11,
    title: "Mocha",
    category: "caliente",
    price: "$19.000",
    rating: 4.8,
    reviews: 105,
    badge: null,
    img: imagenMocha,
    shortDesc: "La combinación perfecta entre el mejor espresso, chocolate caliente y leche vaporizada.",
    fullDesc: "La combinación perfecta entre el mejor espresso, chocolate caliente de la casa y leche vaporizada, ideal para los amantes del chocolate."
  }
];