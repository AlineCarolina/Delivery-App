import {  useState } from "react";
import { postData, setToken } from "../services/requests";
import { useNavigate } from "react-router-dom";
import storageFuncs from "../utils/storageFuncs";
import logo from "../images/Pizza Delivery.png";
import "../styles/Login.css";

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });
    const [handleLogin, setHandleLogin] = useState(false);
    const navigate = useNavigate();

    const handleChange = ({ value, name }: any) => {
        setLoginInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validLogin = ({ email, password }: any) => {
        const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(regexEmail.test(email) && password.length >= 6) return false;
        return true;
    };

    const handleClick = async () => {
        setHandleLogin(false);
        try {
            const data = await postData("/login", loginInfo);
            storageFuncs.set("user", data);
            setToken(data.token)

            switch(data.newUser.role) {
                case "seller": return navigate("/seller/orders");
                case "customer": return navigate("/");
                case "administrator": return navigate("/admin/manage");
                default: break;
            }
        } catch (_) {
            setHandleLogin(true)
        } 
    };
    
    return (
        <main className="tela-login">
            <div className="div-tela-login">
                <img src={logo} alt="logo-app-delivery" className="img-logo"/>
                <form className="form-login">
                    <label htmlFor="email">
                        <h3>Login</h3>
                        <input
                            name="email"
                            placeholder="email@gmail.com"
                            type="text"
                            id="email"
                            autoComplete="email"
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                    <label htmlFor="password">
                        <h3>Senha</h3>
                        <input
                            name="password"
                            placeholder="*********"
                            type="password"
                            id="password"
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                    <button
                        disabled={ validLogin(loginInfo) }
                        type="button"
                        onClick={ () => handleClick() }
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={ () => navigate("/register") }
                    >
                        Ainda não tenho conta
                    </button>
                    {
                        handleLogin && (
                            <p
                                className="erro"
                            >
                                Dados inválidos
                            </p>
                        )
                    }
                </form>
            </div>
        </main>
    )
}

export default Login;