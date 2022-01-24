import React from 'react'
import ItemListContainer from './ItemList'
import Item from './Item'


const ItemList = ({items}) => {
    return (
        <Item items={items}/>
    )
}

export default ItemList