import Serial from "../../interfaces/Serial"
import './SerialCard.css'

export const SerialItem: React.FC<{ key: number, serial: Serial }> = ({ key, serial }) => {
    return (<div>
        <img src={serial.image} className="image"></img>
            <div className="product-list">
                <h3>{serial.name}</h3>
                <span className="price">{serial.rating}</span>
                <a href="" className="button">follow</a>
            </div>
    </div>)
}