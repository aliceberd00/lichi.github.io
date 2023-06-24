import React from "react";
import Image from "next/image";
import card from './Card.module.css'

export function Card({name, articul, price, descripton, img_link}) {
    return (
     <div>
        <Image src={img_link} width={30} height={30} layout="responsive"/>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{articul}</p>
            <p>{descripton}</p>
     </div>
    )
}