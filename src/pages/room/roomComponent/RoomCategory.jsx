
import Room from "./Room";
import styles from "../style/RoomCategory.module.css";

function RoomCategory() {
  return (
    <div className={styles.roomCategory}>
      <h3>Category</h3>
      
        <Room/>
  
    </div>
  );
}

export default RoomCategory;
