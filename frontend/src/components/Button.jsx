import styles from './Button.module.scss';

const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`${styles.btn} p-1 ${className} `}>
            {children}
        </button>
    );
}
export default Button;