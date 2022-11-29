import React from 'react';
import Serial from '../../interfaces/Serial';
import User from '../../interfaces/User';

export const MainButtons: React.FC<{
    user: User | null, setSerialsCopy: any, serials: Serial[], setActiveLoginModal: any,
    setCurrentUser: any
}>
    = ({ user, setSerialsCopy, serials, setActiveLoginModal, setCurrentUser }) => {

        return (user === null) ? (<div>
            <div>
                лого
            </div>
            <div>
                <button onClick={() => {
                    setSerialsCopy(serials);
                }}> Main </button>
            </div>
            <div>
                <button onClick={() => setActiveLoginModal(true)
                }>
                    Login
                </button>
            </div>
        </div>) : (<div>
            <div>
                лого
            </div>
            <div>
                <button onClick={() => {
                    //main button
                    setSerialsCopy(serials);
                }}> Main </button>
            </div>
            <div>
                <button onClick={() => setSerialsCopy(user.serials)}>
                    BookMarks
                </button>
            </div>
            <div>
                <button onClick={() => {
                    setCurrentUser(null)
                    setSerialsCopy(serials)
                }
                }>
                    Logout
                </button>
            </div>
        </div>)
    }