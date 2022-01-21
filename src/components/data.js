import BikiniCies from '../imagenes/bikiniCies1.jpg'
import BikiniGranadina from '../imagenes/bikiniGranadina1.jpg'
import BikiniPal from '../imagenes/bikiniPal.jpg'
import BikiniSaona from '../imagenes/bikiniSaona.jpeg'
import EnterizaRed from "../imagenes/enterizaRed.jpg"
import EnterizaSun from "../imagenes/enteriza1.jpeg"
import EnterizaMy from "../imagenes/enetrizaMy.jpg"
import SummerSaleAnimal from "../imagenes/sumerSaleAnimal.jpeg"
import SummerSaleLove from "../imagenes/sumerSaleLove.jpeg"
import SummerSaleManhattan from "../imagenes/sumerSaleManhattan.jpeg"
import SummerSaleSofi from "../imagenes/sumerSaleSofi.jpeg"
import SummerSaleDelfi from "../imagenes/sumerSaleEnterizaDelfi.jpg"
import SummerSaleCaro from "../imagenes/sumerSaleEnterizaCaro.jpg"

export const bikinis = [
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Cies",
        price: 1900,
        pictureUrl: BikiniCies,
        stock: 3,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Granadina",
        price: 1790,
        pictureUrl: BikiniGranadina,
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: " Bikini Saona",
        price: 1990,
        pictureUrl: BikiniPal,
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
         
        category: "bikinis",
        tipo: "bikinis",
        tittle: "Bikini Granadina",
        price: 1850,
        pictureUrl: BikiniSaona,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
    
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza Red",
        price: 1850,
        pictureUrl: EnterizaRed,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
         
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza Sun",
        price: 1850,
        pictureUrl: EnterizaSun,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
         
        category: "enterizas",
        tipo: "enterizas",
        tittle: "Enteriza My",
        price: 1850,
        pictureUrl: EnterizaMy,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
    
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Animal",
        price: 1850,
        pictureUrl: SummerSaleAnimal,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Love",
        price: 1850,
        pictureUrl: SummerSaleLove,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Manhattan",
        price: 1850,
        pictureUrl: SummerSaleManhattan,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Bikini Sofi",
        price: 1850,
        pictureUrl: SummerSaleSofi,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Enteriza Delfi",
        price: 1850,
        pictureUrl: SummerSaleDelfi,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        
        category: "summer",
        tipo: "summer",
        tittle: "Enteriza Caro",
        price: 1850,
        pictureUrl: SummerSaleCaro,
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