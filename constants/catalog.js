const CATALOG = [
  {
    id: "000001",
    gender: "woman",
    category: "tshirts",
    link: "women.html",
    name: "This cloth is amazing! Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    slide1: "/firuzon.tj/images/general/tshirt/tshirt-valenit-black-001.jpg",
    slide2: "/firuzon.tj/images/general/tshirt/tshirt-valenit-yellow-001.jpg",
    alt: "shirt",
    price: 190.0,
    rating: 0,
    favoriteId: "fav-000001",
    size: ["S", "L"],
    isNew: "true",
    quantity: 2,
  },
  {
    id: "000002",
    gender: "woman",
    category: "tshirts",
    link: "women.html",
    name: "This cloth is amazing! Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    slide1: "/firuzon.tj/images/general/tshirt/tshirt-valenit-sky-001.jpg",
    slide2: "",
    alt: "shirt",
    price: 140,
    salesNumber: -30,
    rating: 5,
    salesPrice: 100,
    favoriteId: "fav-000002",
    size: [],
    isNew: "true",
    isSale: "true",
    quantity: 5,
  },
  {
    id: "sweater-women-sky-00003",
    gender: "woman",
    category: "shirts",
    link: "women.html",
    name: "This cloth is amazing! Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    slide1: "/firuzon.tj/images/general/shirt/shirt-kotton-001.jpg",
    slide2: "/firuzon.tj/images/general/shirt/shirt-kotton-002.jpg",
    alt: "shirt",
    salesNumber: -30,
    price: 200,
    salesPrice: 100,
    rating: 4.3,
    favoriteId: "fav-sweater-women-sky-00003",
    size: ["S", "M", "XL"],
    isSale: "true",
    quantity: 3,
  },
  {
    id: "sweater-women-sky-00004",
    gender: "woman",
    category: "sweaters",
    link: "women.html",
    name: "This cloth is amazing! Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    slide1: "/firuzon.tj/images/general/shirt-l.jpg",
    slide2: "",
    alt: "shirt",
    price: 190,
    rating: 4,
    favoriteId: "fav-sweater-women-sky-00004",
    isNew: "true",
    quantity: 6,
  },
  {
    id: "sweater-women-sky-00005",
    gender: "woman",
    category: "dresses",
    link: "women.html",
    name: "This cloth is amazing! Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    slide1: "/firuzon.tj/images/general/dress/dress-gucci.jpg",
    alt: "shirt",
    salesNumber: -30,
    price: 190,
    salesPrice: 100,
    rating: 0,
    favoriteId: "fav-sweater-women-sky-00005",
    size: ["S", "M", "L"],
    isSale: "true",
    quantity: 4,
  },
  {
    id: "sweater-women-sky-00006",
    gender: "woman",
    category: "dresses",
    link: "women.html",
    name: "Красивое, модное платье производтсво Турция Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    slide1: "/firuzon.tj/images/general/dress/dress-valentine.jpg",
    slide2: "/firuzon.tj/images/general/dress/dress-valentine-2.jpg",
    alt: "shirt",
    price: 300,
    rating: 4.9,
    favoriteId: "fav-sweater-women-sky-00006",
    size: ["XS", "S", "M"],
    quantity: 8,
  },
  {
    id: "sweater-women-sky-00007",
    gender: "woman",
    category: "dresses",
    link: "",
    name: "Летнее модное платье",
    slide1: "/firuzon.tj/images/general/dress/dress-kottone.jpg",
    slide2: "",
    alt: "shirt",
    salesNumber: -30,
    price: 300,
    salesPrice: 100,
    rating: 4.9,
    favoriteId: "fav-sweater-women-sky-00007",
    size: ["S", "M"],
    isSale: "true",
    quantity: 8,
  },
  {
    id: "sweater-women-sky-00008",
    gender: "woman",
    category: "hoodies",
    link: "women.html",
    name: "Стильные Худи производтсво Турция",
    slide1: "/firuzon.tj/images/general/hudy.jpg",
    slide2: "",
    alt: "shirt",
    salesNumber: -30,
    price: 250,
    salesPrice: 100,
    rating: 3.9,
    favoriteId: "fav-sweater-women-sky-00008",
    size: ["S", "L"],
    isSale: "true",
    quantity: 9,
  },

  {
    id: "0005",
    gender: "woman",
    category: "cap",
    link: "#",
    name: "Кепка",
    slide1: "/firuzon.tj/images/general/cap.jpg",
    alt: "Кепка",
    price: 49,
    rating: 0,
    favoriteId: "fav-0005",
    quantity: 11,
  },
  {
    id: "0006",
    gender: "man",
    category: "caps",
    link: "#",
    name: "Кепка",
    slide1: "/firuzon.tj/images/general/cap.jpg",
    alt: "Кепка",
    price: 49,
    rating: 5,
    favoriteId: "fav-0006",
    quantity: 1,
  },
  {
    id: "0007",
    gender: "woman",
    category: "jeans",
    link: "#",
    name: "Джинс превосходного качество!",
    slide1: "/firuzon.tj/images/general/jeans.jpg",
    alt: "Джинсы",
    price: 210,
    rating: 0,
    favoriteId: "fav-0007",
    size: [],
    quantity: 2,
  },
  {
    id: "0004",
    gender: "man",
    category: "jeans",
    link: "#",
    name: "Джинс превосходного качество!",
    slide1: "/firuzon.tj/images/general/jeans.jpg",
    alt: "Джинсы",
    price: 160,
    rating: 3,
    favoriteId: "fav-0004",
    size: [],
    isTrending: "true",
    quantity: 3,
  },
  {
    id: "sweater-women-sky-00011",
    gender: "woman",
    category: "skiirts",
    link: "women.html",
    name: "Стильные Юбки производтсво Турция",
    slide1: "/firuzon.tj/images/general/skiirt/skiirt-kotton-01.jpg",
    slide2: "/firuzon.tj/images/general/skiirt/skiirt-kotton-02.jpg",
    alt: "shirt",
    price: 299,
    rating: 4,
    favoriteId: "fav-sweater-women-sky-00011",
    size: [],
    isNew: "true",
    quantity: 8,
  },
  {
    id: "sweater-women-sky-00012",
    gender: "woman",
    category: "skiirts",
    link: "women.html",
    name: "Стильные Юбки производтсво Турция",
    slide1: "/firuzon.tj/images/general/skiirt/skiirt-valentin-brown-001.jpg",
    slide2: "/firuzon.tj/images/general/skiirt/skiirt-valentin-brown-002.jpg",
    alt: "shirt",
    price: 299,
    rating: 5,
    favoriteId: "fav-sweater-women-sky-00012",
    size: [],
    isNew: "true",
    quantity: 6,
  },
  {
    id: "0003",
    gender: "man",
    category: "sneakers",
    link: "#",
    name: "Модные кроси Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    slide1: "/firuzon.tj/images/general/snikears.jpg",
    alt: "Кроси",
    price: 32,
    rating: 5,
    favoriteId: "fav-0003",
    isNew: "true",
  },
  {
    id: "sweater-women-sky-00013",
    gender: "woman",
    category: "complect",
    link: "women.html",
    name: "Комплект рубашка и брюки",
    slide1:
      "/firuzon.tj/images/general/complect/complect-shirt-trousers-milk.jpg",
    slide2: "",
    alt: "shirt",
    price: 299,
    rating: 5,
    favoriteId: "fav-sweater-women-sky-00013",
    size: [],
    isNew: "true",
  },

  {
    id: "sweater-women-sky-00014",
    gender: "woman",
    category: "complect",
    link: "women.html",
    name: "Комплект рубашка и брюки",
    slide1:
      "/firuzon.tj/images/general/complect/complect-shirt-trousers-red.jpg",
    slide2: "",
    alt: "shirt",
    price: 299,
    rating: 5,
    favoriteId: "fav-sweater-women-sky-00014",
    size: [],
  },
  {
    id: "sweater-women-sky-00015",
    gender: "woman",
    category: "complect",
    link: "women.html",
    name: "Комплект рубашка и брюки",
    slide1:
      "/firuzon.tj/images/general/complect/complect-shirts-violet-trousers.jpg",
    slide2: "",
    alt: "shirt",
    price: 299,
    rating: 5,
    favoriteId: "fav-sweater-women-sky-00015",
    size: [],
    isTrending: true,
  },

  {
    id: "0010",
    gender: "man",
    category: "complect",
    link: "#",
    name: "Комплект одежды",
    slide1: "/firuzon.tj/images/general/trend-complet.jpg",
    alt: "Комплект одежды",
    price: 120,
    rating: 5,
    favoriteId: "fav-0010",
    isTrending: "true",
  },
  {
    id: "0008",
    gender: "man",
    category: "coat",
    link: "#",
    name: "Клетчатое пальто контрастного цвета",
    slide1: "/firuzon.tj/images/general/cout-prd.jpg",
    alt: "Клеточное пальто",
    price: 99,
    rating: 5,
    favoriteId: "fav-0008",
  },
  {
    id: "0011",
    gender: "woman",
    category: "coat-night",
    link: "",
    name: "This cloth is amazing!",
    slide1: "/firuzon.tj/images/general/coat-shower.jpg",
    alt: "shirt",
    price: 61,
    rating: 3,
    favoriteId: "fav-0011",
    size: "",
    salesNumber: -50,
    salesPrice: 30,
    isTrending: "true",
  },
  {
    id: "0012",
    gender: "man",
    category: "coat-night",
    link: "",
    name: "This cloth is amazing!",
    slide1: "/firuzon.tj/images/general/coat-shower.jpg",
    alt: "shirt",
    price: 61,
    rating: 3,
    favoriteId: "fav-0012",
    size: "",
    salesNumber: -50,
    salesPrice: 30,
    isSale: "true",
  },
  {
    id: "0013",
    link: "",
    name: "This cloth is amazing!",
    slide1: "/firuzon.tj/images/general/coat-shower.jpg",
    alt: "shirt",
    price: 61,
    rating: 3,
    favoriteId: "fav-0013",
    size: "",
    isNew: "true",
    isTrending: "true",
  },
  {
    id: "0014",
    gender: "man-woman",
    category: "whatch",
    link: "#",
    name: "Механические Часы",
    slide1: "/firuzon.tj/images/general/watch.jpg",
    alt: "Механические Часы",
    price: 50,
    rating: 4,
    favoriteId: "fav-0014",
    isNew: "true",
  },
];
//new arrivals Catalog
const newArrivalsCATALOG = [];

//trending Catalog
const trendingNowCATALOG = [];

//sales Catalog
const salesCATALOG = [];