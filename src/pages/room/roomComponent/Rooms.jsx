
import RoomCategory from './RoomCategory';
import styles from '../style/Rooms.module.css';

const roomData = [
  {
    category: "Family's room",
    rooms: [
      { name: "The Royal Room", price: 132.54, size: 224, bed: "1 - double bed" },
      // Add more room objects as needed
    ],
  },
  {
    category: "Double room",
    rooms: [
      { name: "The Royal Room", price: 132.54, size: 224, bed: "1 - double bed" },
      // Add more room objects as needed
    ],
  },
  {
    category: "Single room",
    rooms: [
      { name: "The Royal Room", price: 132.54, size: 224, bed: "1 - double bed" },
      // Add more room objects as needed
    ],
  },
];

function Rooms() {
  return (
    <section className={styles.rooms}>
      <h2>Hotel in Da Nang</h2>
      <p>1253 results Jul 14-24</p>
      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${styles.active}`}>
          Our top picks
        </button>
        <button className={styles.filterBtn}>Price</button>
        <button className={styles.filterBtn}>Type</button>
        <button className={styles.filterBtn}>More</button>
        <div className={styles.sortBy}>
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by">
            <option value="price">Price</option>
            {/* Add other sorting options if needed */}
          </select>
        </div>
      </div>

      {roomData.map((category, index) => (
        <RoomCategory
          key={index}
          category={category.category}
          rooms={category.rooms}
        />
      ))}
    </section>
  );
}

export default Rooms;

