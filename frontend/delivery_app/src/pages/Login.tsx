import { useEffect, useState } from "react";
import { postData, setToken } from "../services/requests";
import { useNavigate } from "react-router-dom";

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
            localStorage.setItem("user", JSON.stringify(data));
            setToken(data.token)
            console.log(data.token)

            switch(data.newUser.role) {
                case "seller": return navigate("/seller/orders");
                case "customer": return navigate("/customer/products");
                case "administrator": return navigate("/admin/manage");
                default: break;
            }
        } catch (_) {
            setHandleLogin(true)
        } 
    };

    //useEffect(() => {
    //    const userString = localStorage.getItem("user");
    //    const user = userString ? JSON.parse(userString) : null
    //    if (user) {
    //      setToken(user.token);
    //    }
    //  }, []);

    return (
        <main className="tela-login">
            <div>
                <h1>App Delivery</h1>
                <form>
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