import styles from "./WeatherCard.module.css"

const Header = () => (
    <header>
        <div className={styles.header1}>
        <nav>
            <a href="/Bordeaux">Bordeaux</a>
            <a href="/Paris">Paris</a>
            <a href="/Nice">Nice</a>
            <a href="/Marseille">Marseille</a>
        </nav>
        </div>
    </header>
);

export default Header;