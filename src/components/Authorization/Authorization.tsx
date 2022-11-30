import axios from "axios";
import User from "../../interfaces/User";
import '../../styles/Authorization/authorization.scss'

function handleLogInButton(mail: string, password: string, setActiveLogin: any, setCurrentPassword: any, setCurrentUser: any) {

    axios({
        method: "get",
        url: "http://localhost:3000/users",
    }).then((users) => {
        let user = users.data.find((user: User) => user.mail === mail && user.password === password);
        if (user === undefined) {
            alert("Wrong name or password!")
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
    return (<div className="authorization">
        <form className="loginForm" onSubmit={(e) => { e.preventDefault() }}>
                <h2>Hello Stranger!</h2>
                <div className="inputsAndButtons">
                    <p>Please log in</p>
                    <input
                        className=""
                        type="text"
                        placeholder="login"
                        onChange={(e) => setCurrentLogin(e.target.value)}
                        value={currentLogin}
                        required
                    />
                    <input
                        className="loginFormInput"
                        type="password"
                        placeholder="password"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        value={currentPassword}
                        required
                    />
                    <button className="Btn" type="submit" onClick={(e) =>
                        handleLogInButton(currentLogin, currentPassword, setActiveLoginModal, setCurrentPassword, setCurrentUser)}>
                        Login
                    </button>
                    
                    <button className="Btn" type="submit" onClick={(e) => handleRegisterButton(e, currentLogin, currentPassword, setActiveLoginModal, setCurrentUser)}>
                        Sign up
                    </button>
                </div>
            </form>
    </div>)
}