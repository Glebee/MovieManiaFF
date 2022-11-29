import Serial from "../../interfaces/Serial"
import User from "../../interfaces/User"
import axios from 'axios'
import './SerialCard.css'

function handleUnfollowButton(user: User, serial: Serial, setCurrentUser: any) {
    axios({
        method: 'put',
        url: `http://localhost:3000/users/${user?.id}`,
        data:
        {
            mail: user.mail,
            password: user.password,
            serials: user.serials.filter(s => s.name != serial.name)
        }
    }).then((response) => setCurrentUser(response.data))
}

function handleFollowButton(user: User, serial: Serial, setCurrentUser: any){
    axios({
        method: 'put',
        url: `http://localhost:3000/users/${user?.id}`,
        data:
        {
            mail: user.mail,
            password: user.password,
            serials: [...user.serials, serial]
        }
    }).then((response) => setCurrentUser(response.data))
}

export const SerialItem: React.FC<{ user: User | null, serial: Serial, setSelectedSerial: any, setActiveCard: any, setCurrentUser: any }>
    = ({ user, serial, setSelectedSerial, setActiveCard, setCurrentUser }) => {
        return (<div>
            <img src={serial.image} className="image" onClick={() => {
                setActiveCard(true)

                setSelectedSerial(serial)
            }}></img>
            <div className="product-list">
                <h3>{serial.name}</h3>
                <span className="price">{serial.premiered}</span>
                {(user === null)
                    ? (<></>) : (user.serials.map(s => s.name).includes(serial.name)
                        ? <button onClick={() => handleUnfollowButton(user, serial, setCurrentUser)}>unfollow</button>
                        : <button onClick={() => handleFollowButton(user, serial, setCurrentUser)}>follow</button>)}
            </div>
        </div>)
    }