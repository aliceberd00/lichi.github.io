import React, {useEffect} from "react";
import Image from "next/image";
import card from './Card.module.css'
import {InView, useInView} from 'react-intersection-observer';
import {useDispatch} from "react-redux";

export function Card({id,name, article, price, description, img_link}) {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    useEffect(() => {
        dispatch({type: "UPDATE_ITEM_VISIBILITY", payload: {id: id, visibility:inView}})

    }, [inView])

    return (
     <div>
        <Image ref={ref} src={img_link} width={3} height={3} layout="responsive"/>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{article}</p>
         <div dangerouslySetInnerHTML={{ __html: description }} />
         {/*{description}*/}
     </div>
    )
}