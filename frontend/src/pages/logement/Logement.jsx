import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";

import styles from "./Logement.module.scss";

import logements from "../../logements.json";




const Logement = () => {
    const id = useParams();
    const logement = logements.find((logement) => logement.id === id.id);
    const { title, location, tags, description, equipments, host, rating } = logement;

    const desc = {
        title: "Description",
        content: description
    }


    const equip = {
        title: "Equipements",
        content: equipments
            ? <ul>{equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
            ))}</ul> : "Aucun équipement"
    }


    return (
        <main className="container">
            <div className="rental-caroussel">
                <img src={logement.cover} alt={title} />
            </div>
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

            <section className="rental-accordions flex flex-responsive items-stretch">
                <Accordion data={desc} />
                <Accordion data={equip} />

            </section>
        </main>
    )
}

export default Logement;
