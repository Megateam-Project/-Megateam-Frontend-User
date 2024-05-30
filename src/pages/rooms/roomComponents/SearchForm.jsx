
import styles from "../styles/SearchForm.module.css";

function SearchForm() {
  return (
    <form className={styles.searchForm}>
      <div className={styles.formGroup}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value="Son Tra - Da Nang"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="room-type">Room Type</label>
        <input type="text" id="room-type" name="room-type" value="Standard" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="person">Person</label>
        <input type="number" id="person" name="person" value="0" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="check-in">Check in</label>
        <input type="date" id="check-in" name="check-in" value="2023-07-14" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="check-out">Check out</label>
        <input type="date" id="check-out" name="check-out" value="2023-07-24" />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default SearchForm;
