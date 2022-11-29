import Serial from "../../interfaces/Serial"
import './SerialCard.css'

export const SerialItem: React.FC<{serial: Serial, setSelectedSerial: any, setActiveCard: any}> = ({serial, setSelectedSerial, setActiveCard }) => {
    return (<div>
        <img src={serial.image} className="image" onClick={() => {
            setActiveCard(true)
        
            setSelectedSerial(serial)}}></img>
            <div className="product-list">
                <h3>{serial.name}</h3>
                <span className="price">{serial.premiered}</span>
                <a href="" className="button">follow</a>
            </div>
    </div>)
}