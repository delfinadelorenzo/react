
export const bikinis = [
    {
        id:'1',
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Cies",
        price: 1900,
        pictureUrl: "/bikiniCies1.jpg",
        stock: 3,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
        id:'2',
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Granadina",
        price: 1790,
        pictureUrl: "/bikiniGranadina1.jpg",
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
        id:'3',
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Pal",
        price: 1990,
        pictureUrl: "/bikiniPal.jpg",
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
        id:'4',
        category: "bikinis",
        tipo: "bikinis",
        tittle: "Bikini Saona",
        price: 1850,
        pictureUrl: "/bikiniSaona.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'5',
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza Red",
        price: 1850,
        pictureUrl: "/enterizaRed.jpg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'6',
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza Sun",
        price: 1850,
        pictureUrl: "/enteriza1.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'7',
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza My",
        price: 1850,
        pictureUrl: "/enetrizaMy.jpg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'8',
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Animal",
        price: 1850,
        pictureUrl: "/sumerSaleAnimal.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'9',
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Love",
        price: 1850,
        pictureUrl: "/sumerSaleLove.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'10',
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Manhattan",
        price: 1850,
        pictureUrl: "/sumerSaleManhattan.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'11',
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Sofi",
        price: 1850,
        pictureUrl: "/sumerSaleSofi.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'12',
        category: "summer",
        tipo: "summer",
        tittle: "Enteriza Delfi",
        price: 1850,
        pictureUrl: "/sumerSaleEnterizaDelfi.jpg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id:'13',
        category: "summer",
        tipo: "summer",
        tittle: "Enteriza Caro",
        price: 1850,
        pictureUrl: "/sumerSaleEnterizaCaro.jpg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },

]

export const data = new Promise((res, rej) => {
    let uno = "1"
    if (uno === "1") {
        setTimeout(() => {
            res(bikinis)
        }, 2000)
    } else {
        rej("Hubo un error al cargar los productos")
    }
})