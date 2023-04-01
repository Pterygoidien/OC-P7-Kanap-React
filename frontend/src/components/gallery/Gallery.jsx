import Article from "./Article";
import { useEffect } from "react";
import { useContext } from "react";
import LogementContext from "../../context/logementContext";

const Gallery = () => {

    const logementContext = useContext(LogementContext);
    const { getLogements, logements } = logementContext;

    useEffect(() => {
        getLogements();
        // eslint-disable-next-line
    }, [logements]);

    return (
        <section className="gallery bg--secondary p-2 rounded-2xl items flex gap-6 flex-expand flex-center ">
            {logements && logements.map((logement) => (
                <Article key={logement.id} data={logement} />
            ))}
        </section>

    )
}
export default Gallery;