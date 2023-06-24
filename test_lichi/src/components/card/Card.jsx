import React from "react";
import Image from "next/image";
import card from './Card.module.css'

export function Card({name, article, price, description, img_link}) {
    return (
     <div>
        <Image src={img_link} width={3} height={3} layout="responsive"/>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{article}</p>
            <p>{description}</p>
     </div>
    )
}