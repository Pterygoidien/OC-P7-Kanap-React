import styles from './Accordion.module.scss';
import Button from './Button';

const Accordion = ({ data }) => {
    const { title, content } = data;
    return (<article className={styles.accordion}>
        <Button className="text-left w-full">
            <h2>{title}</h2></Button>
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
