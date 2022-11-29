import axios from "axios";
import User from "../../interfaces/User";

function handleLogInButton(mail: string, password: string, setActiveLogin: any, setCurrentPassword: any, setCurrentUser: any) {

    axios({
        method: "get",
        url: "http://localhost:3000/users",
    }).then((users) => {
        let user = users.data.find((user: User) => user.mail === mail && user.password === password);
        if (user === undefined) {
            alert("Неверное имя пользователя или пароль!")
            setCurrentPassword('')
        }
        else {
            setActiveLogin(false)
            setCurrentUser(user)
        }
    })

}

function handleRegisterButton(e: any, mail: string, password: string, setActiveLoginModal: any, setCurrentUser: any) {
    axios({
        method: "get",
        url: "http://localhost:3000/users",
    }).then((users) => {
        let user = users.data.find((user: User) => user.mail === mail && user.password === password);
        if (user === undefined) {
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

export const Authorization: React.FC<
{currentLogin: string, setCurrentLogin: any, currentPassword: string, setCurrentPassword: any, setActiveLoginModal: any, setCurrentUser: any}> 
= ({currentLogin, setCurrentLogin, currentPassword, setCurrentPassword, setActiveLoginModal, setCurrentUser})=>{
    return (<div>
        <form className="loginForm" onSubmit={(e) => { e.preventDefault() }}>
                <h2>Hello Stranger</h2>
                <div>
                    <input
                        className=""
                        type="text"
                        placeholder="Логин"
                        onChange={(e) => setCurrentLogin(e.target.value)}
                        value={currentLogin}
                        required
                    />
                </div>
                <div>
                    <input
                        className="loginFormInput"
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        value={currentPassword}
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
    </div>)
}