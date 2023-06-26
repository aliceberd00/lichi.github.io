import React, {useEffect} from "react";
import Image from "next/image";
import card from './Card.module.css'
import {InView, useInView} from 'react-intersection-observer';
import {useDispatch, useSelector} from "react-redux";

export function Card({element_id ,name, article, price, description, img_link, isLoading}) {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
    });
    // const is_loading = useSelector(state => state.loading_reducer.is_loading)

    useEffect(() => {
        dispatch({type: "UPDATE_ITEM_VISIBILITY", payload: {id: element_id, visibility:inView}})
        console.log('update visible '+element_id + inView)
    }, [inView])

    return (
     <div className={card.card} id={"card_"+element_id}>
        <Image ref={ref} src={img_link} width={3} height={3} layout="responsive"/>
         {/* <h1>{element_id}</h1>*/}
            <h1 >{name}</h1>
            <h2>{price}</h2>
            <p> акртикул: {article}</p>
         <div className={card.description} dangerouslySetInnerHTML={{ __html: description }} />
         {/*{description}*/}
     </div>
    )
}