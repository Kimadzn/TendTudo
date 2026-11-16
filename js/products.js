// CONFIGURAÇÕES DA LOJA — edite os dados abaixo quando quiser.
const WHATSAPP_NUMBER = "5511930636139";
const WHATSAPP_DISPLAY = "+55 11 93063-6139";
const INSTAGRAM_URL = "https://www.instagram.com/tendtudo.lojaoficial";
const INSTAGRAM_HANDLE = "@tendtudo.lojaoficial";

const STORE_INFO = {
  about: "",
  address: "",
  mapsUrl: "",
  hours: "",
  email: ""
};

// Deixe vazio para usar os produtos cadastrados logo abaixo.
const SHEET_CSV_URL = "";

// PREÇOS: "price" é o valor normal e "promo" (opcional) é o valor com desconto, que aparece ao lado com o normal riscado.
// Preço vazio ("") mostra "Consulte pelo WhatsApp".
// Brincos 01 a 16: valores dos prints do WhatsApp. Anéis, colares, conjuntos e as 4 primeiras pulseiras ainda têm preço PROVISÓRIO: troque antes de publicar.
const PRODUCTS = [

  {
    "id": 20,
    "name": "Brinco modelo 01",
    "category": "Brincos",
    "price": "R$ 21,00",
    "badges": [],
    "image": "assets/products/brincos/020.webp",
    "featured": true,
    "promo": "R$ 17,00"
  },
  {
    "id": 21,
    "name": "Brinco modelo 02",
    "category": "Brincos",
    "price": "R$ 32,01",
    "badges": [],
    "image": "assets/products/brincos/021.webp",
    "featured": false,
    "promo": "R$ 26,00"
  },
  {
    "id": 22,
    "name": "Brinco modelo 03",
    "category": "Brincos",
    "price": "R$ 17,00",
    "badges": [],
    "image": "assets/products/brincos/022.webp",
    "featured": false,
    "promo": "R$ 14,00"
  },
  {
    "id": 23,
    "name": "Brinco modelo 04",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/023.webp",
    "featured": false
  },
  {
    "id": 24,
    "name": "Brinco modelo 05",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/024.webp",
    "featured": false
  },
  {
    "id": 25,
    "name": "Brinco modelo 06",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/025.webp",
    "featured": false
  },
  {
    "id": 26,
    "name": "Brinco modelo 07",
    "category": "Brincos",
    "price": "R$ 27,00",
    "badges": [],
    "image": "assets/products/brincos/026.webp",
    "featured": false,
    "promo": "R$ 22,00"
  },
  {
    "id": 27,
    "name": "Brinco modelo 08",
    "category": "Brincos",
    "price": "R$ 21,00",
    "badges": [],
    "image": "assets/products/brincos/027.webp",
    "featured": false,
    "promo": "R$ 17,00"
  },
  {
    "id": 28,
    "name": "Brinco modelo 09",
    "category": "Brincos",
    "price": "R$ 24,00",
    "badges": [],
    "image": "assets/products/brincos/028.webp",
    "featured": false,
    "promo": "R$ 19,00"
  },
  {
    "id": 29,
    "name": "Brinco modelo 10",
    "category": "Brincos",
    "price": "R$ 9,00",
    "badges": [],
    "image": "assets/products/brincos/029.webp",
    "featured": false,
    "promo": "R$ 7,00"
  },
  {
    "id": 30,
    "name": "Brinco modelo 11",
    "category": "Brincos",
    "price": "R$ 21,00",
    "badges": [],
    "image": "assets/products/brincos/030.webp",
    "featured": false,
    "promo": "R$ 17,00"
  },
  {
    "id": 31,
    "name": "Brinco modelo 12",
    "category": "Brincos",
    "price": "R$ 25,00",
    "badges": [],
    "image": "assets/products/brincos/031.webp",
    "featured": false,
    "promo": "R$ 20,00"
  },
  {
    "id": 32,
    "name": "Brinco modelo 13",
    "category": "Brincos",
    "price": "R$ 15,00",
    "badges": [],
    "image": "assets/products/brincos/032.webp",
    "featured": false,
    "promo": "R$ 12,00"
  },
  {
    "id": 33,
    "name": "Brinco modelo 14",
    "category": "Brincos",
    "price": "R$ 6,00",
    "badges": [],
    "image": "assets/products/brincos/033.webp",
    "featured": false,
    "promo": "R$ 5,00"
  },
  {
    "id": 34,
    "name": "Brinco modelo 15",
    "category": "Brincos",
    "price": "R$ 12,00",
    "badges": [],
    "image": "assets/products/brincos/034.webp",
    "featured": false,
    "promo": "R$ 10,00"
  },
  {
    "id": 35,
    "name": "Brinco modelo 16",
    "category": "Brincos",
    "price": "R$ 11,00",
    "badges": [],
    "image": "assets/products/brincos/035.webp",
    "featured": false,
    "promo": "R$ 9,00"
  },
  {
    "id": 36,
    "name": "3 Filhos",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/036.webp",
    "featured": true
  },
  {
    "id": 37,
    "name": "Choker Bolinha",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/037.webp",
    "featured": false
  },
  {
    "id": 38,
    "name": "Choker Coração",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/038.webp",
    "featured": false
  },
  {
    "id": 39,
    "name": "Colar Gravatinha",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/039.webp",
    "featured": false
  },
  {
    "id": 40,
    "name": "Dog",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/040.webp",
    "featured": false
  },
  {
    "id": 41,
    "name": "Filhos Casal",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/041.webp",
    "featured": false
  },
  {
    "id": 42,
    "name": "Guardalupe",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/042.webp",
    "featured": false
  },
  {
    "id": 43,
    "name": "Laço",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/043.webp",
    "featured": false
  },
  {
    "id": 44,
    "name": "Menina",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/044.webp",
    "featured": false
  },
  {
    "id": 45,
    "name": "Menino",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/045.webp",
    "featured": false
  },
  {
    "id": 46,
    "name": "Minnie",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/046.webp",
    "featured": false
  },
  {
    "id": 47,
    "name": "Nossa Senhora",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/047.webp",
    "featured": false
  },
  {
    "id": 48,
    "name": "Olho Redondo",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/048.webp",
    "featured": false
  },
  {
    "id": 49,
    "name": "Olho",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/049.webp",
    "featured": false
  },
  {
    "id": 50,
    "name": "Colar modelo 15",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/050.webp",
    "featured": false
  },
  {
    "id": 51,
    "name": "Colar modelo 16",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/051.webp",
    "featured": false
  },
  {
    "id": 52,
    "name": "Colar modelo 17",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/052.webp",
    "featured": false
  },
  {
    "id": 53,
    "name": "Colar modelo 18",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/053.webp",
    "featured": false
  },
  {
    "id": 54,
    "name": "Colar modelo 19",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/054.webp",
    "featured": false
  },
  {
    "id": 55,
    "name": "Colar modelo 20",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/055.webp",
    "featured": false
  },
  {
    "id": 56,
    "name": "Colar modelo 21",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/056.webp",
    "featured": false
  },
  {
    "id": 57,
    "name": "Colar modelo 22",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/057.webp",
    "featured": false
  },
  {
    "id": 58,
    "name": "Colar modelo 23",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/058.webp",
    "featured": false
  },
  {
    "id": 59,
    "name": "Colar modelo 24",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/059.webp",
    "featured": false
  },
  {
    "id": 60,
    "name": "Colar modelo 25",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/060.webp",
    "featured": false
  },
  {
    "id": 61,
    "name": "Colar modelo 26",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/061.webp",
    "featured": false
  },
  {
    "id": 62,
    "name": "Colar modelo 27",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/062.webp",
    "featured": false
  },
  {
    "id": 63,
    "name": "Olho Grego Redondo1",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/063.webp",
    "featured": false
  },
  {
    "id": 64,
    "name": "Terço",
    "category": "Colares",
    "price": "",
    "badges": [],
    "image": "assets/products/colares/064.webp",
    "featured": false
  },
  {
    "id": 65,
    "name": "Conjunto modelo 01",
    "category": "Conjuntos",
    "price": "",
    "badges": [],
    "image": "assets/products/conjuntos/065.webp",
    "featured": true
  },
  {
    "id": 66,
    "name": "Conj Laço",
    "category": "Conjuntos",
    "price": "",
    "badges": [],
    "image": "assets/products/conjuntos/066.webp",
    "featured": false
  },
  {
    "id": 67,
    "name": "Conjunto coração Gota",
    "category": "Conjuntos",
    "price": "",
    "badges": [],
    "image": "assets/products/conjuntos/067.webp",
    "featured": false
  },
  {
    "id": 68,
    "name": "Pulseira Masculina",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/068.webp",
    "featured": true
  },
  {
    "id": 69,
    "name": "Pulseira modelo 02",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/069.webp",
    "featured": false
  },
  {
    "id": 70,
    "name": "Pulseira modelo 03",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/070.webp",
    "featured": false
  },
  {
    "id": 71,
    "name": "Pulseira Religiosa",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/071.webp",
    "featured": false
  },
  {
    "id": 72,
    "name": "Brinco modelo 17",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/072.webp",
    "featured": false
  },
  {
    "id": 73,
    "name": "Brinco modelo 18",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/073.webp",
    "featured": false
  },
  {
    "id": 74,
    "name": "Brinco modelo 19",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/074.webp",
    "featured": false
  },
  {
    "id": 75,
    "name": "Brinco modelo 20",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/075.webp",
    "featured": false
  },
  {
    "id": 76,
    "name": "Brinco modelo 21",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/076.webp",
    "featured": false
  },
  {
    "id": 77,
    "name": "Brinco modelo 22",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/077.webp",
    "featured": false
  },
  {
    "id": 78,
    "name": "Brinco modelo 23",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/078.webp",
    "featured": false
  },
  {
    "id": 79,
    "name": "Brinco modelo 24",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/079.webp",
    "featured": false
  },
  {
    "id": 80,
    "name": "Brinco modelo 25",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/080.webp",
    "featured": false
  },
  {
    "id": 81,
    "name": "Brinco modelo 26",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/081.webp",
    "featured": false
  },
  {
    "id": 82,
    "name": "Brinco modelo 27",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/082.webp",
    "featured": false
  },
  {
    "id": 83,
    "name": "Brinco modelo 28",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/083.webp",
    "featured": false
  },
  {
    "id": 84,
    "name": "Brinco modelo 29",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/084.webp",
    "featured": false
  },
  {
    "id": 85,
    "name": "Brinco modelo 30",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/085.webp",
    "featured": false
  },
  {
    "id": 86,
    "name": "Brinco modelo 31",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/086.webp",
    "featured": false
  },
  {
    "id": 87,
    "name": "Brinco modelo 32",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/087.webp",
    "featured": false
  },
  {
    "id": 88,
    "name": "Brinco modelo 33",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/088.webp",
    "featured": false
  },
  {
    "id": 89,
    "name": "Brinco modelo 34",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/089.webp",
    "featured": false
  },
  {
    "id": 90,
    "name": "Brinco modelo 35",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/090.webp",
    "featured": false
  },
  {
    "id": 91,
    "name": "Brinco modelo 36",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/091.webp",
    "featured": false
  },
  {
    "id": 92,
    "name": "Brinco modelo 37",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/092.webp",
    "featured": false
  },
  {
    "id": 93,
    "name": "Brinco modelo 38",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/093.webp",
    "featured": false
  },
  {
    "id": 94,
    "name": "Brinco modelo 39",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/094.webp",
    "featured": false
  },
  {
    "id": 95,
    "name": "Brinco modelo 40",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/095.webp",
    "featured": false
  },
  {
    "id": 96,
    "name": "Brinco modelo 41",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/096.webp",
    "featured": false
  },
  {
    "id": 97,
    "name": "Brinco modelo 42",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/097.webp",
    "featured": false
  },
  {
    "id": 98,
    "name": "Brinco modelo 43",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/098.webp",
    "featured": false
  },
  {
    "id": 99,
    "name": "Brinco modelo 44",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/099.webp",
    "featured": false
  },
  {
    "id": 100,
    "name": "Brinco modelo 45",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/100.webp",
    "featured": false
  },
  {
    "id": 101,
    "name": "Brinco modelo 46",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/101.webp",
    "featured": false
  },
  {
    "id": 102,
    "name": "Brinco modelo 47",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/102.webp",
    "featured": false
  },
  {
    "id": 103,
    "name": "Brinco modelo 48",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/103.webp",
    "featured": false
  },
  {
    "id": 104,
    "name": "Brinco modelo 49",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/104.webp",
    "featured": false
  },
  {
    "id": 105,
    "name": "Brinco modelo 50",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/105.webp",
    "featured": false
  },
  {
    "id": 106,
    "name": "Brinco modelo 51",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/106.webp",
    "featured": false
  },
  {
    "id": 107,
    "name": "Brinco modelo 52",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/107.webp",
    "featured": false
  },
  {
    "id": 108,
    "name": "Masculino modelo 01",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/108.webp",
    "featured": false
  },
  {
    "id": 109,
    "name": "Masculino modelo 02",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/109.webp",
    "featured": false
  },
  {
    "id": 110,
    "name": "Masculino modelo 03",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/110.webp",
    "featured": false
  },
  {
    "id": 111,
    "name": "Masculino modelo 04",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/111.webp",
    "featured": false
  },
  {
    "id": 112,
    "name": "Masculino modelo 05",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/112.webp",
    "featured": false
  },
  {
    "id": 113,
    "name": "Masculino modelo 06",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/113.webp",
    "featured": false
  },
  {
    "id": 114,
    "name": "Masculino modelo 07",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/114.webp",
    "featured": false
  },
  {
    "id": 115,
    "name": "Masculino modelo 08",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/115.webp",
    "featured": false
  },
  {
    "id": 116,
    "name": "Masculino modelo 09",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/116.webp",
    "featured": false
  },
  {
    "id": 117,
    "name": "Masculino modelo 10",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/117.webp",
    "featured": false
  },
  {
    "id": 118,
    "name": "Masculino modelo 11",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/118.webp",
    "featured": false
  },
  {
    "id": 119,
    "name": "Masculino modelo 12",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/119.webp",
    "featured": false
  },
  {
    "id": 120,
    "name": "Masculino modelo 13",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/120.webp",
    "featured": false
  },
  {
    "id": 121,
    "name": "Masculino modelo 14",
    "category": "Masculino",
    "price": "",
    "badges": [],
    "image": "assets/products/masculino/121.webp",
    "featured": false
  },
  {
    "id": 122,
    "name": "Tornozeleira modelo 01",
    "category": "Tornozeleiras",
    "price": "",
    "badges": [],
    "image": "assets/products/tornozeleira/122.webp",
    "featured": false
  },
  {
    "id": 123,
    "name": "Pulseira modelo 05",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/123.webp",
    "featured": false
  },
  {
    "id": 124,
    "name": "Pulseira modelo 06",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/124.webp",
    "featured": false
  },
  {
    "id": 125,
    "name": "Pulseira modelo 07",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/125.webp",
    "featured": false
  },
  {
    "id": 126,
    "name": "Pulseira modelo 08",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/126.webp",
    "featured": false
  },
  {
    "id": 127,
    "name": "Pulseira modelo 09",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/127.webp",
    "featured": false
  },
  {
    "id": 128,
    "name": "Pulseira modelo 10",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/128.webp",
    "featured": false
  },
  {
    "id": 129,
    "name": "Pulseira modelo 11",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/129.webp",
    "featured": false
  },
  {
    "id": 130,
    "name": "Pulseira modelo 12",
    "category": "Pulseiras e Braceletes",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/130.webp",
    "featured": false
  },

{
    "id": 131,
    "name": "Brinco modelo 53",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/131.webp",
    "featured": false
  },
  {
    "id": 132,
    "name": "Brinco modelo 54",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/132.webp",
    "featured": false
  },
  {
    "id": 133,
    "name": "Brinco modelo 55",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/133.webp",
    "featured": false
  },
  {
    "id": 134,
    "name": "Brinco modelo 56",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/134.webp",
    "featured": false
  },
  {
    "id": 135,
    "name": "Brinco modelo 57",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/135.webp",
    "featured": false
  },
  {
    "id": 136,
    "name": "Brinco modelo 58",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/136.webp",
    "featured": false
  },
  {
    "id": 137,
    "name": "Brinco modelo 59",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/137.webp",
    "featured": false
  },
  {
    "id": 138,
    "name": "Brinco modelo 60",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/138.webp",
    "featured": false
  },
  {
    "id": 139,
    "name": "Brinco modelo 61",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/139.webp",
    "featured": false
  },
  {
    "id": 140,
    "name": "Brinco modelo 62",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/140.webp",
    "featured": false
  },
  {
    "id": 141,
    "name": "Brinco modelo 63",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/141.webp",
    "featured": false
  },
  {
    "id": 142,
    "name": "Brinco modelo 64",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/142.webp",
    "featured": false
  },
  {
    "id": 143,
    "name": "Brinco modelo 65",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/143.webp",
    "featured": false
  },
  {
    "id": 144,
    "name": "Brinco modelo 66",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/144.webp",
    "featured": false
  },
  {
    "id": 145,
    "name": "Brinco modelo 67",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/145.webp",
    "featured": false
  },
  {
    "id": 146,
    "name": "Brinco modelo 68",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/146.webp",
    "featured": false
  },
  {
    "id": 147,
    "name": "Brinco modelo 69",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/147.webp",
    "featured": false
  },
  {
    "id": 148,
    "name": "Brinco modelo 70",
    "category": "Brincos",
    "price": "",
    "badges": [],
    "image": "assets/products/brincos/148.webp",
    "featured": false
  },
  {
    "id": 200,
    "name": "Conjunto 01",
    "category": "Conjunto",
    "price": "",
    "badges": [],
    "image": "assets/products/conjunto/200.webp",
    "featured": false
  },
    {
    "id": 201,
    "name": "Pingente 01",
    "category": "Pingentes",
    "price": "",
    "badges": [],
    "image": "assets/products/pingente/201.webp",
    "featured": false
  },
    {
    "id": 202,
    "name": "Pingente 02",
    "category": "Pingentes",
    "price": "",
    "badges": [],
    "image": "assets/products/pingente/202.webp",
    "featured": false
  },
    
    {
    "id": 203,
    "name": "Pingente 03",
    "category": "Pingentes",
    "price": "",
    "badges": [],
    "image": "assets/products/pingente/203.webp",
    "featured": false
  },
    {
    "id": 204,
    "name": "Pulseira 17",
    "category": "Pulseiras",
    "price": "",
    "badges": [],
    "image": "assets/products/pulseiras/204.webp",
    "featured": false
  }
  

];


