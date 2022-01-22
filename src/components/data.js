
export const bikinis = [
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Cies",
        price: 1900,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/bikiniCies1.jpg",
        stock: 3,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Granadina",
        price: 1790,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/bikiniGranadina1.jpg",
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Pal",
        price: 1990,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/bikiniPal.jpg",
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: "Bikini Saona",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/bikiniSaona.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
    
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza Red",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/enterizaRed.jpg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
         
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza Sun",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/enteriza1.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
         
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza My",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/enetrizaMy.jpg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
    
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Animal",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/sumerSaleAnimal.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Love",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/sumerSaleLove.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Manhattan",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/sumerSaleManhattan.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Sofi",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/sumerSaleSofi.jpeg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Enteriza Delfi",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/sumerSaleEnterizaDelfi.jpg",
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Enteriza Caro",
        price: 1850,
        pictureUrl: "https://raw.githubusercontent.com/delfinadelorenzo/react/88fe244e4518be87e642df4bababacae9a036666/src/imagenes/sumerSaleEnterizaCaro.jpg",
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