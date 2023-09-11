import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData, setToken } from "../services/requests";

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
        console.log(registerData);
        
        setErrorRegister(false);
        try {
            const data = await postData('/register', registerData);
            localStorage.setItem('user', JSON.stringify(data));
            setToken(data.token)
            navigate('/customer/products');
        } catch (_) {
            setErrorRegister(true);
        }
    };

    return (
        <main>
            <div>
                <h1>Cadastro</h1>
                <form>
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