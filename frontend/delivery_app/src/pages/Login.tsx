import { useState } from "react";

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const handleChange = ({ value, name }: any) => {
        setLoginInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                    <label htmlFor="password">
                        <h3>Senha</h3>
                        <input
                            name="password"
                            placeholder="*********"
                            type="password"
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                </form>
            </div>
        </main>
    )
}

export default Login;