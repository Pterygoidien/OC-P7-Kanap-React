import styles from './Accordion.module.scss';
import Arrow from './Arrow';
import Button from './Button';
import { useState } from 'react';

const Accordion = ({ titre, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }


    return (<article className={styles.accordion}>
        <Button
            className="text-left w-full  flex items-center justify-between"
            onClick={toggleOpen}
        >
            <h2>{titre}</h2>
            <Arrow />
        </Button>
        <div className={`${styles.accordion__content} rounded-b-xl ${isOpen ? styles.open : ''}`}>
            {children}
        </div>
    </ article >);
}

Accordion.defaultProps = {
    title: 'Aucun titre',
    children: '<p>Aucun contenu</p>',
    defaultOpen: true
}

export default Accordion;
