import React from 'react'

const Card = ({name, price, ingredients, image}) => {
    return (
        <div className="w-80">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src={image}/>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            {name}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {price}
                    </p>
                </header>
            </article>
        </div>
    )
}

export default Card
