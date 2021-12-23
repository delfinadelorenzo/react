import React from 'react'
import { Card } from 'react-bootstrap'

const Item = ({ item }) => {
    return (
        <ContainerItem>
            <div>
                <Card style={{ width: '18rem' }}>

                    <Card.Img src={item.pictureUrl}> </Card.Img>

                    <Card.Body>
                        <div>

                            <span>
                                <Card.Title> {item.tittle} </Card.Title>
                            </span>

                        </div>

                        <div>
                            <span>
                                <Card.Text>  {item.description}   </Card.Text>
                            </span>

                            <span>
                                <Card.Text>  {item.price}   </Card.Text>
                            </span>

                        </div>

                        <div>
                            <span>
                                <Button variant="primary">Go somewhere</Button>
                            </span>

                        </div>

                    </Card.Body>
                </Card>
            </div>


        </ContainerItem>

    )
}

export default Item
