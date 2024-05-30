
import styles from "../styles/Room.module.css";

function Room() {
  return (
    <div className={styles.room}>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/183188000.jpg?k=5841b14e45023845e16b4b029e0a9d0b2b5ddfeabf69edcb52de01e806648e9d&o=&hp=1" alt="Room Image">
        <div class="room-details">
            <div class="room-header">
                <h2>The Royal Room</h2>
                <span class="availability">Available: Yes <i style="color: #ff6b6b;">&#9829;</i></span>
            </div>
            <div class="room-info">
                <div><i>&#128716;</i> 1 - double bed</div>
                <div><i>&#128206;</i> 224m<sup>2</sup></div>
                <div><i>&#128187;</i> TV</div>
                <div><i>&#128246;</i> Satellite</div>
                <div><i>&#128225;</i> Wi-Fi</div>
            </div>
            <div class="room-footer">
                <span class="room-price">$132,54 / night</span>
                <button class="choose-room">Choose room</button>
            </div>
        </div>
    </div>
  );
}

export default Room;
