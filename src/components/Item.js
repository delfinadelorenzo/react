import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Item = ({ item }) => {
    console.log(item.pictureUrl, item.tittle)
    return (
        // <ContainerItem>
        <div className='p-2'>
            <Card style={{ width: '18rem' }}>

                <img src={item.pictureUrl} />

                <Card.Body>
                    <div className='tittle'>

                        <span>
                            <Card.Title> {item.tittle} </Card.Title>
                        </span>

                    </div>

                    <div>
                        {/* <span>
                            <Card.Text>  {item.description}   </Card.Text>
                        </span> */}

                        <span className='precio'>
                            <Card.Text>  {item.price}   </Card.Text>
                        </span>

                    </div>
                    {/* <div>
                        <span> <Card.Text> Stock disponible: {item.stock} </Card.Text> </span>
                    </div> */}

                    <div>

                        <Link to={`/detalle/${item.id}`}>Ver Mas</Link>
                        

                    </div>

                </Card.Body>
            </Card>
        </div>


        // </ContainerItem>

    )
}

export default Item
