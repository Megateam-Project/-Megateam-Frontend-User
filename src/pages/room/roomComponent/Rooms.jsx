import RoomCategory from "./RoomCategory";
import styles from "../style/Rooms.module.css";
export function Rooms() {
  return (
    <section className={styles.rooms}>
      <h2>Hotel in Da Nang</h2>
      <div className={styles.filters}>
      </div>
        <RoomCategory/>
    </section>
  );
}
export default Rooms;
