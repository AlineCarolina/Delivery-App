import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData, setToken } from "../services/requests";
import storageFuncs from "../utils/storageFuncs";
import "../styles/LoginRegister.css";

function Register() {
    const [registerData, setRegisterData] = useState({
        username: "",
        password: "",
        email: "",
    });
    const [errorRegister, setErrorRegister] = useState(false);
    const navigate = useNavigate();

    const handleChange = ({ value, name }: any) => {
        setRegisterData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validRegister = ({ username, email, password }: any) => {
        const LENGTH_MIN_PASS = 6;
        const LENGTH_MIN_NAME = 6;
      
        const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regexEmail.test(email)
          && password.length >= LENGTH_MIN_PASS
          && username.length >= LENGTH_MIN_NAME) return false;
        return true;
    };

    const handleClick = async () => {
        setErrorRegister(false);
        try {
            const data = await postData("/register", registerData);
            storageFuncs.set("user", data);
            setToken(data.token)
            navigate("/");
        } catch (_) {
            setErrorRegister(true);
        }
    };

    return (
        <main className="tela-main">
            <div className="div-tela">
                <h1 className="h1-cadastro">Cadastro</h1>
                <form className="form-main">
                    <label htmlFor="username">
                        <h3>Nome</h3>
                        <input
                            id="username"
                            name="username"
                            value={ registerData.username }
                            type="text"
                            placeholder="Nome"
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                    <label htmlFor="email">
                        <h3>Email</h3>
                        <input
                            id="email"
                            name="email"
                            value={ registerData.email }
                            type="email"
                            placeholder="email@gmail.com"
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                    <label htmlFor="password">
                        <h3>Senha</h3>
                        <input
                            id="password"
                            name="password"
                            value={ registerData.password }
                            type="password"
                            placeholder="*********"
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                    <button
                        type="button"
                        disabled={ validRegister(registerData) }
                        onClick={ () => handleClick() }
                        id="btn-cadastro"
                    >
                        Cadastrar
                    </button>
                    { errorRegister && (
                        <p> Usuario já existe</p>
                    ) }
                </form>
            </div>
        </main>
    )
}

export default Register;