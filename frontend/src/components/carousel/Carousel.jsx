import styles from "./Carousel.module.scss";


const Carousel = ({ pictures }) => {

    return (
        <section class={styles.carousel}>
            {pictures.map((picture) => (<img key={picture} src={picture} alt="logement" />
            ))}
        </section>
    );
}

export default Carousel;

