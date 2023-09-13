import { useEffect, useState, useContext } from "react";
import storageFuncs from "../utils/storageFuncs";
import { Link, useNavigate } from "react-router-dom";
import DeliveryContext from "../context/deliveryContext";
import logo from "../images/Pizza Delivery.png"
import "../styles/Header.css";

function Header() {
    const navigate = useNavigate();
    const [usernameST, setUsernameST] = useState("");
    const [roleST, setRoleST] = useState("");
    const { setCart } = useContext(DeliveryContext);
    const [login, setLogin] = useState(true);

    useEffect(() => {
        const userData = storageFuncs.get("user");
        if(!userData) {
            setLogin(false)
        } else {
            setUsernameST(userData.newUser.username);
            setRoleST(userData.newUser.role);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setCart(null);
        localStorage.removeItem("cart");
        navigate("/");
    }

    return (
        <header>
            <div className="div-img-logo">
                <img src={logo} className="image-logo"/>
            </div>
            {login ? (
                roleST === "customer" ? (
                        <div className="div-header">
                            <div>
                                <Link to={"/"}>Produtos</Link>
                                <Link to={"/customer/order"}>Meus Pedidos</Link>
                            </div>
                            <div className="div-header-info-user">
                                <h1>{ usernameST }</h1>
                                <button
                                    type="button"
                                    onClick={ () => logout() }
                                >
                                    Sair
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div><p>teste para admin e vendedor</p></div>
                    )
                    ) : (
                        <div className="div-btn">
                            <button
                                type="button"
                                onClick={ () => navigate("/login") }
                                className="btn-login"
                            >
                                Login
                            </button>
                        </div>
                    )}
        </header>
    )
}

export default Header;