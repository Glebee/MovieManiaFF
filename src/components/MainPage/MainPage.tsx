import React from 'react';
import User from '../../interfaces/User';
import { Header } from './Header'
import { Modal } from './Modal';
import { SerialsList } from './SerialsList';
import Serial from '../../interfaces/Serial';
import { SerialCard } from '../Card/SerialCard'
import { Authorization } from '../Authorization/Authorization';

export const MainPage: React.FC<{ user: User | null, setCurrentUser: any }> = ({ user, setCurrentUser }) => {
    const [activeLoginModal, setActiveLoginModal] = React.useState(false)
    const [activeSerialCardModal, setActiveSerialCardModal] = React.useState(false)

    const [currentLogin, setCurrentLogin] = React.useState('');
    const [currentPassword, setCurrentPassword] = React.useState('');

    const [serials, setSerials] = React.useState<Serial[]>([]);
    const [serialsCopy, setSerialsCopy] = React.useState<Serial[]>([]);

    const [activeSerial, setActiveSerial] = React.useState<Serial | null>(null)

    return (<div>
        <Header user={user}
            setSerialsCopy={setSerialsCopy}
            serials={serials}
            setActiveLoginModal={setActiveLoginModal}
            setCurrentUser={setCurrentUser} />
            
        <SerialsList user={user}
            setSerials={setSerials}
            setSerialsCopy={setSerialsCopy}
            serials={serials}
            serialsCopy={serialsCopy}
            setActiveCard={setActiveSerialCardModal}
            setSelectedSerial={setActiveSerial}
            setCurrentUser={setCurrentUser} />

        <Modal active={activeLoginModal} setActive={setActiveLoginModal}>
            <Authorization currentLogin={currentLogin}
                setCurrentLogin={setCurrentLogin}
                currentPassword={currentPassword}
                setCurrentPassword={setCurrentPassword}
                setActiveLoginModal={setActiveLoginModal}
                setCurrentUser={setCurrentUser} />
        </Modal>

        <Modal active={activeSerialCardModal} setActive={setActiveSerialCardModal}>
            <SerialCard activeSerial={activeSerial} />
        </Modal>
    </div>)
}