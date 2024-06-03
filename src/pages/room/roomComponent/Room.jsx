// Room.js

import styles from "../style/Room.module.css";

function Room() {
  return (
    <div className={styles["room-card"]}>
      <img
        src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
        alt="Room"
        className={styles["room-card-img"]}
      />
      <div className={styles["room-details"]}>
        <div className={styles["room-header"]}>
          <h2 className={styles["room-header-title"]}>The Royal Room</h2>
          <span className={styles["availability"]}>
            Available: Yes <i style={{ color: "#ff6b6b" }}>&#9829;</i>
          </span>
        </div>
        <div className={styles["room-info"]}>
          <div>
            <i>&#128716;</i> 1 - double bed
          </div>
          <div>
            <i>&#128206;</i> 224m<sup>2</sup>
          </div>
          <div>
            <i>&#128187;</i> TV
          </div>
          <div>
            <i>&#128246;</i> Satellite
          </div>
          <div>
            <i>&#128225;</i> Wi-Fi
          </div>
        </div>
        <div className={styles["room-footer"]}>
          <span className={styles["room-price"]}>$132,54 / night</span>
          <button className={styles["choose-room"]}>Choose room</button>
        </div>
      </div>
    </div>
  );
}

export default Room;
