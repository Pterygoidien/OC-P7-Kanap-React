import styles from './Accordion.module.scss';

const Accordion = ({ data }) => {
    const { title, content } = data;
    return (<article className={styles.accordion}>
        <div className={styles['accordion__title']}>
            <h2>{title}</h2>
        </div>
        <div className={styles['accordion__content']}>
            <p>{content}</p>
        </div>
    </ article>);
}

Accordion.defaultProps = {
    data: {
        title: "Titre",
        content: "Contenu"
    }
}



export default Accordion;
