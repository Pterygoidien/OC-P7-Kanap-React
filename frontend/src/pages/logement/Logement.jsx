import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import Carousel from "../../components/carousel/Carousel";

import styles from "./Logement.module.scss";

import logements from "../../assets/logements.json"





const Logement = () => {
    const id = useParams();
    const logement = logements.find((logement) => logement.id === id.id);
    const { title, location, tags, description, equipments, host, rating, pictures } = logement;

    return (
        <main className="container">
            <Carousel pictures={pictures} />
            <div className="flex flex-expand items-center">
                <section className="rental-highlight flex flex-col gap-2">
                    <h1>
                        {title}
                    </h1>
                    <h2>
                        {location}
                    </h2>
                    <div className="flex justify-start gap-3 ">
                        {tags && tags.map((tag) => (
                            <Button key={tag}>{tag}</Button>

                        ))}
                    </div>

                </section>
                <section className="rental-infos flex justify-between items-center">
                    <div className="rental-infos__rating grow">
                        <span>{rating}</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <div className="rental-infos__author flex">
                        <div className="flex flex-col justify-center items-end gap-2">
                            {host.name.split(" ").map((name) => (
                                <span key={name}>{name}</span>
                            ))
                            }

                        </div>
                        <div className={styles['author__picture']}>
                            <img src={host.picture} alt={host.name} />
                        </div>


                    </div>
                </section>
            </div>

            <section className={`${styles['rental-accordions']} flex flex-responsive items-stretch gap-4`}>
                <Accordion titre="Description"><p>{description}</p></Accordion>
                <Accordion titre="Equipements">
                    {equipments ? (<ul>
                        {equipments.map((equipment) => {
                            return (<li key={equipment}>{equipment}</li>)
                        })} </ul>) : 'Aucun équipement'}
                </Accordion>
            </section>
        </main>
    )
}

export default Logement;
