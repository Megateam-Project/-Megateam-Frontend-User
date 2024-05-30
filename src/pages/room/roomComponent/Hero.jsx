
import SearchForm from "./SearchForm";
import styles from "../style/Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Rooms and Suites</h1>
      <p>
        The elegant luxury bedrooms in this gallery showcase custom interior
        designs & decorating ideas. View pictures and find your perfect luxury
        bedroom design.
      </p>
      <SearchForm />
    </div>
  );
}

export default Hero;
