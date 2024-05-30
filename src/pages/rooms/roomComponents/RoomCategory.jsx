import Room from "./Room";
import styles from "../styles/RoomCategory.module.css";

function RoomCategory() {
  return (
    <div className={styles.roomCategory}>
      <h3>category</h3>

      <Room />
    </div>
  );
}

export default RoomCategory;
