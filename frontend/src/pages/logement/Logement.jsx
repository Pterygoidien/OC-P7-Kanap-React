import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion";

import logements from "../../logements.json";

/*
 url : /logement/:id
 fetch the id from the url
*/

const Logement = () => {


    const id = useParams();
    console.log(id);



    return (
        <main className="container">
            Page de logement
            <Accordion />
        </main>
    )
}

export default Logement;