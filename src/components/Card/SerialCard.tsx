import Serial from "../../interfaces/Serial";

export const SerialCard: React.FC<{ activeSerial: Serial | null }> = ({ activeSerial }) => {

    return (
        <div>
            <span>{activeSerial?.name}</span>
            <span>{activeSerial?.description}</span>
            <span>premiered: {activeSerial?.premiered}</span>
            <span>status: {activeSerial?.status}</span>
            <span>Genres: {activeSerial?.genres}</span>
            <span>Rating: {activeSerial?.rating}</span>
            <img src={activeSerial?.image}></img>
        </div>
    );
}