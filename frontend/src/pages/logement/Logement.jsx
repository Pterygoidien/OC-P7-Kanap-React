import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";

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
            <section className="rental-caroussel">
                <img src={logement.cover} alt={title} />
            </section>
            <div className="flex">
                <section className="rental-highlight">
                    <h1>
                        {title}
                    </h1>
                    <h2>
                        {location}
                    </h2>
                    <div className="tags flex ">
                        {tags && tags.map((tag) => (
                            <Button key={tag}>{tag}</Button>

                        ))}
                    </div>

                </section>
                <section className="rental-infos flex">
                    <div className="rating">
                        <span>{rating}</span>
                        <span>★</span>
                    </div>
                    <div className="author">
                        {host.name}
                        {host.picture ? <img src={host.picture} alt={host.name} /> : null}
                    </div>
                </section>
            </div>

            <section className="rental-accordions flex">
                <Accordion data={desc} />
                <Accordion data={equip} />
            </section>
        </main>
    )
}

export default Logement;
