import React from 'react'
import Card from './Card'
import menu from './data.json'

const Menu = () => {
    console.log(menu)
    return (
        <div className="flex justify-center pt-20 pb-20">
            <div className="grid grid-cols-3 gap-20">
                { menu && menu.Pizza.map((elem, index) => {
                    return (
                        <div key={index}>
                            <Card name={elem.name} price={elem.price} ingredients={elem.ingredients} image={elem.image}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu
