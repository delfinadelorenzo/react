import BikiniCies from '../imagenes/bikiniCies1.jpg'
import BikiniGranadina from '../imagenes/bikiniGranadina1.jpg'
import BikiniPal from '../imagenes/bikiniPal.jpg'
import BikiniSaona from '../imagenes/bikiniSaona.jpeg'
import EnterizaRed from "../imagenes/enterizaRed.jpg"
import EnterizaSun from "../imagenes/enteriza1.jpeg"
import EnterizaMy from "../imagenes/enetrizaMy.jpg"

const bikinis = [
    {
        id: '1',
        tipo:"bikinis",
        tittle: " Bikini Cies",
        price: "$1900",
        pictureUrl: BikiniCies,
        stock: 3,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
        id: '2',
        tipo:"bikinis",
        tittle: " Bikini Granadina",
        price: "$1790",
        pictureUrl: BikiniGranadina,
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
        id: '3',
        tipo:"bikinis",
        tittle: " Bikini Saona",
        price: "$1990",
        pictureUrl: BikiniPal,
        stock: 5,
        description: "Bikini  triángulo con tiras negras (lurex y lycra) "
    },
    {
        id: '4',
        tipo:"bikinis",
        tittle: "Bikini Granadina",
        price: "$1850",
        pictureUrl: BikiniSaona,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id: '5',
        tipo:"enterizas",
        tittle: "Enteriza Red",
        price: "$1850",
        pictureUrl: EnterizaRed,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id: '6',
        tipo:"enterizas",
        tittle: "Enteriza Sun",
        price: "$1850",
        pictureUrl: EnterizaSun,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
    {
        id: '7',
        tipo:"enterizas",
        tittle: "Enteriza My",
        price: "$1850",
        pictureUrl: EnterizaMy,
        stock: 5,
        description: "Bikini top SIN TAZA y Colaless tiro alto"
    },
]

export const data = new Promise((res, rej)=>{
    let uno = "1"
    if(uno === "1"){
        setTimeout(()=>{
            res(bikinis)
        }, 2000)
    }else{
        rej("Hubo un error al cargar los productos")
    }
})