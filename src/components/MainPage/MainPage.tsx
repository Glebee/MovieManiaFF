import React from 'react';
import User from '../../interfaces/User';
import { Header } from './Header'
import { Modal } from './Modal';
import { SerialsList } from './SerialsList';
import Serial from '../../interfaces/Serial';
import axios from 'axios';


function handleLogInButton(mail: string, password: string, setActiveLogin: any, setCurrentPassword: any, setCurrentUser: any) {
    
    axios({
        method: "get",
        url:"http://localhost:3000/users",
    }).then((users) => {
        let user = users.data.find((user: User) => user.mail === mail && user.password===password);
        if (user === undefined) {
            alert("Неверное имя пользователя или пароль!")
            setCurrentPassword('')
        }
        else{
            setActiveLogin(false)
            setCurrentUser(user)
        }
    })
    
}

function handleRegisterButton(e : any, mail: string, password: string, setActiveLoginModal: any, setCurrentUser:any){
    axios({
        method: "get",
        url:"http://localhost:3000/users",
    }).then((users) => {
        let user = users.data.find((user: User) => user.mail === mail && user.password === password);
        if (user === undefined){
            user = {
                mail: mail,
                password: password,
                serials: []
            }
            
            axios({
                method: "post",
                url: "http://localhost:3000/users",
                data: user
            }).then((res) => {
                setActiveLoginModal(false)
                setCurrentUser(user)
            })
        }
    })
}

export const MainPage: React.FC<{ user: User | null, setCurrentUser: any }> = ({ user, setCurrentUser }) => {
    const [activeLoginModal, setActiveLoginModal] = React.useState(false)

    const [currentLogin, setCurrentLogin] = React.useState('');
    const [currentPassword, setCurrentPassword] = React.useState('');

    const [serials, setSerials] = React.useState<Serial[]>([]);
    const [serialsCopy, setSerialsCopy] = React.useState<Serial[]>([]);

    return (<div>
        <Header user={user} setSerialsCopy={setSerialsCopy} serials={serials} setActiveLoginModal = {setActiveLoginModal} setCurrentUser = {setCurrentUser}/>
        <SerialsList setSerials={setSerials} setSerialsCopy={setSerialsCopy} serials = {serials} serialsCopy = {serialsCopy}/>

        <Modal active={activeLoginModal} setActive={setActiveLoginModal}>
            <form className="loginForm" onSubmit={(e) => { e.preventDefault()}}>
                <h2>Hello Stranger</h2>
                <div>
                    <input
                        className=""
                        type="text"
                        placeholder="Логин"
                        onChange={(e) => setCurrentLogin(e.target.value)}
                        value = {currentLogin}
                        required
                    />
                </div>
                <div>
                    <input
                        className="loginFormInput"
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        value = {currentPassword}
                        required
                    />
                </div>
                <div>
                    <button className="blackBtn" type="submit" onClick={(e) => 
                        handleLogInButton(currentLogin, currentPassword, setActiveLoginModal, setCurrentPassword, setCurrentUser)}>
                        Войти
                    </button>
                    <button className="blackBtn" type="submit" onClick={(e) => handleRegisterButton(e, currentLogin, currentPassword, setActiveLoginModal, setCurrentUser)}>
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </Modal>
    </div>)
}