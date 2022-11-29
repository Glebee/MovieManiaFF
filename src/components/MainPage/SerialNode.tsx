import Serial from "../../interfaces/Serial"

export const SerialCard: React.FC<{ serial: Serial }> = ({ serial }) => {
    return (<div>
        <img src={serial.image} className="image" onClick={() => console.log("нажал на картинку")}></img>
        <div className="product-list">
            <h3>{serial.name}</h3>
            <span className="price">{serial.premiered}</span>
            <a href="" className="button">follow</a>
        </div>
    </div>)
}