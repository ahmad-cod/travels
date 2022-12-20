import React from "react"
import Header from './Header'
import data from './data'
import Card from './Card.js'

export default function App() {
    const cards = data.map(item => <Card key={item.id} {...item} />)
    // console.log('data', data)
            // <Card />
            
    return (
        <div>
            <Header />
            {cards ? cards : '<p>No card</p>'}
        </div>
    )
}