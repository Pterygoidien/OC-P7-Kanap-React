import Banner from '../../components/Banner';
import Gallery from '../../components/gallery/Gallery';

import styles from './Home.module.scss'

const Home = () => {
    return (
        <main className={`container ${styles.home}`}>
            <Banner />
            <Gallery />
        </main>
    );
}
export default Home;