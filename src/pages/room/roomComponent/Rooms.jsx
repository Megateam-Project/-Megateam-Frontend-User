
import RoomCategory from './RoomCategory';
import styles from '../style/Rooms.module.css';
import { useSearchParams } from 'react-router-dom';
const roomData = [
  {
    category: "Family",
    rooms: [
      { name: "The Royal Room", price: 132.54, size: 224, bed: "1 - double bed" },
      // Add more room objects as needed
    ],
  },
  {
    category: "Double",
    rooms: [
      { name: "The Royal Room", price: 132.54, size: 224, bed: "1 - double bed" },
      // Add more room objects as needed
    ],
  },
  {
    category: "Single",
    rooms: [
      { name: "The Royal Room", price: 132.54, size: 224, bed: "1 - double bed" },
      // Add more room objects as needed
    ],
  },
];


export function Rooms() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const checkInDate = searchParams.get('checkInDate');
  const checkOutDate = searchParams.get('checkOutDate');
  const rooms = roomData;

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

