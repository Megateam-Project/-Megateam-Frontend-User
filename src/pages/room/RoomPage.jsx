import { Hero } from "./roomComponent/Hero"
import Rooms from "./roomComponent/Rooms"
import { Search } from "../Search"

export function RoomPage() {
    return (
        <div>
            <Hero />
            <Rooms/> 
        </div>
    )
}