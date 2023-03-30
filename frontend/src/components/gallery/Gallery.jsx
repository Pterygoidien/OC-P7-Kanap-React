import Article from "./Article";

import logements from "../../assets/logements.json"


const Gallery = () => {
    return (


        <section className="gallery items flex gap-3 flex-expand  flex-center">

            {logements && logements.map((logement) => (
                <Article key={logement.id} data={logement} />
            ))}


        </section>

    )
}
export default Gallery;