import React from 'react'
import { Card } from 'react-bootstrap'

const ItemListContainer = ({description, price}) => {
    return (
        <Card>
            <div>Producto: {description} </div>
            <div>Precio: {price} </div>
        </Card>

    )
}

export default ItemListContainer
