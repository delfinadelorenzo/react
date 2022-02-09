import React from 'react'
import './ComoComprar.scss'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { FaExclamation } from "react-icons/fa";

const ComoComprar = () => {
    return (
        <div>
            <div>
                <img src='/PoliticasdeCambio.png' ></img>
            </div>
            <br></br>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="8">
                        <p>Información Importante</p>
                        <ul>
                            <li>Los productos adquiridos en Sale no tienen cambio ni devolución.</li>
                            <li>Las prendas tienen cambio únicamente por talles o fallas.</li>
                            <li>Las prendas deben encontrarse en su paquete, sin uso, sin perfumes, sin manchas y sin haberse lavado.</li>
                            <li>Cada prenda debe contar con su etiqueta adherida.</li>
                            <li>Las prendas de color blanco no tienen cambio, excepto que sea por fallas.</li>
                        </ul>

                    </MDBCol>
                    <MDBCol size="4">

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div>

            </div>
            <br></br>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="8">
                        <p>Cambios</p>
                        <ul>
                            <li>Periodo de 30 días continuos para realizar cambios.</li>
                            <li>Los productos deben ser presentados en su paquete y con el recibo de compra.</li>
                            <li>Cada prenda debe contar con su etiqueta adherida.</li>
                            <li>Los cambios se realizan por única vez. Si las prendas enviadas para devolución no cumplen con los requisitos,
                                pueden ser re-enviadas nuevamente por un costo adicional a cargo del cliente.</li>
                        </ul>

                    </MDBCol>
                    <MDBCol size="4"></MDBCol>
                </MDBRow>
            </MDBContainer>

            <div>
                <img src='/Envios.png'></img>
            </div>
            <br></br>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="8">
                        <p>Envios</p>
                        <ul>
                            <li>Hacemos envíos a todo el país a través de encomiendas.</li>
                            <li>Los costos de envío pueden variar según el peso, tamaño del paquete y las tarifas de cada empresa.</li>
                            <li>Tomá en cuenta que los transportadores pueden demorar entre 3 a 5 días.</li>
                        </ul>
                        <p>IMPORTANTE</p>
                        <ul>
                            <li>
                                Una vez depositado el paquete en la empresa de transporte a elección, la responsabilidad del mismo pasa a ser de la transportadora en si.
                                No nos hacemos responsables de problemas que llegaran a surgir durante el traslado de su pedido desde la sucurcal de transporte hasta su domicilio.
                            </li>

                        </ul>
                        <p>RECOMENDAMOS</p>
                        <ul>
                            <li>
                                Si al llegar su paquete se encuentra abierto/vulnerado, le recomendamos no firmar el recibo de este mismo y hacer el reclamo correspondiente a la agencia de transporte.
                            </li>
                        </ul>

                    </MDBCol>
                    <MDBCol size="4"></MDBCol>
                </MDBRow>
            </MDBContainer>
            <div>
                <img src='/MediosdePago.png'></img>
            </div>
            <br></br>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="8">
                        <p>Medios de Pago</p>
                        <ul>
                            <li>En nuestra tienda online utilizamos Mercado Pago o Cuenta DNI.</li>
                            <li>Trabajamos con 3,6 o 12 cuotas sin interés con trajetas de Crédito.</li>
                            <li>Podés optar por la opción pago en efectivo a través de Transferencia Bancaria o Cuenta DNI.</li>
                        </ul>

                    </MDBCol>
                    <MDBCol size="4"></MDBCol>
                </MDBRow>
            </MDBContainer>

        </div>

    )
}

export default ComoComprar