import Logo from "../../Logo";
import styles from "./Footer.scss";

export default function Footer() {
    return (
        <footer>
            <div className="container flex flex-col justify-between items-center py-3 gap-7">

                <Logo fill="#ffffff" className="logo" />
                <p>© 2020 Kasa. All rights reserved </p>

            </div>
        </footer>
    )
}