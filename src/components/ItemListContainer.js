import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    const { tipo } = props;
    return (
        <>
            <h1>{tipo}</h1>
            <ItemList />
        </>
    )
}

export default ItemListContainer

