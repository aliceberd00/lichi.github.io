import React, {useEffect} from "react";
import Image from "next/image";
import card from './Card.module.css'
import {InView, useInView} from 'react-intersection-observer';
import {useDispatch} from "react-redux";

export function Card({element_id ,name, article, price, description, img_link}) {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
    });

    useEffect(() => {
        dispatch({type: "UPDATE_ITEM_VISIBILITY", payload: {element_id: element_id, visibility:inView}})
    }, [inView])

    return (
         <div className={card.card} id={"card_"+element_id}>
            <Image ref={ref} src={img_link} width={384} height={512} alt={""}/>
             <h1 >{name}</h1>
             <h2>{price}</h2>
            <p> акртикул: {article}</p>
            <div className={card.description} dangerouslySetInnerHTML={{ __html: description }}/>

         </div>
    )
}