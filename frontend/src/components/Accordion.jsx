import styles from './Accordion.module.scss';
import Arrow from './Arrow';
import Button from './Button';
import { useState } from 'react';

const Accordion = ({ data, defaultOpen = true }) => {
    const { title, content } = data;
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (<article className={styles.accordion}>
        <Button className="text-left w-full rounded-none rounded-t-xl flex items-center justify-between">
            <h2>{title}</h2>
            <Arrow />
        </Button>
        <div className="p-1">
            <p>{content}</p>
        </div>
    </ article>);
}

Accordion.defaultProps = {
    data: {
        title: "Titre",
        content: "Contenu"
    },
    defaultOpen: true
}

export default Accordion;
