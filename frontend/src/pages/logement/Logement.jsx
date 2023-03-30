import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion";

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
            <h1>
                {title}
            </h1>
            <h2>
                {location}
            </h2>

            {tags && tags.map((tag) => (
                <button key={tag}>{tag}</button>
            ))}
            <div className="author">
                {host.name}
                {host.picture ? <img src={host.picture} alt={host.name} /> : null}
                {rating}
            </div>


            <Accordion data={desc} />
            <Accordion data={equip} />
        </main>
    )
}

export default Logement;
