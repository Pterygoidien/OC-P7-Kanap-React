import { redirect, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import Carousel from "../../components/carousel/Carousel";
import LogementContext from "../../context/logementContext";
import Rating from "../../components/Rating";

import styles from "./Logement.module.scss";
import Error404 from "../Error404";


const Logement = () => {
    const id = useParams().id;
    const logementContext = useContext(LogementContext);
    const { getLogement, logement } = logementContext;


    useEffect(() => {
        getLogement(id)
        // eslint-disable-next-line
    }, [logement]);

    if (!logement) {
        return <Error404 />
    }

    return (
        <main className="container">
            {logement && (
                <>
                    <Carousel pictures={logement.pictures} />
                    <div className="flex flex-expand items-center">
                        <section className="rental-highlight flex flex-col gap-4">
                            <h1>
                                {logement.title}
                            </h1>
                            <h2>
                                {logement.location}
                            </h2>
                            <div className="flex justify-start gap-4 ">
                                {logement.tags && logement.tags.map((tag) => (
                                    <Button key={tag}>{tag}</Button>

                                ))}
                            </div>

                        </section>
                        <section className={`${styles['rental-infos']} flex justify-between items-center`}>
                            <div className="rental-infos__rating flex grow">
                                <Rating value={logement.rating} />
                            </div>
                            <div className="rental-infos__author flex">
                                <div className="flex flex-col justify-center items-end gap-2">
                                    {logement.host.name.split(" ").map((name) => (
                                        <span key={name}>{name}</span>
                                    ))
                                    }

                                </div>
                                <div className={styles['author__picture']}>
                                    <img src={logement.host.picture} alt={logement.host.name} />
                                </div>


                            </div>
                        </section>
                    </div>

                    <section className={`${styles['rental-accordions']} flex flex-responsive items-stretch gap-4`}>
                        <Accordion titre="Description"><p>{logement.description}</p></Accordion>
                        <Accordion titre="Equipements">
                            {logement.equipments ? (<ul className="p-1">
                                {logement.equipments.map((equipment) => {
                                    return (<li key={equipment}>{equipment}</li>)
                                })} </ul>) : 'Aucun équipement'}
                        </Accordion>
                    </section>

                </>)}


        </main>
    )
}

export default Logement;
