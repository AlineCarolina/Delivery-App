import { useEffect, useState, useContext } from "react";
import storageFuncs from "../utils/storageFuncs";
import { Link, useNavigate } from "react-router-dom";
import DeliveryContext from "../context/deliveryContext";
import logo from "../images/Pizza Delivery.png";
import svgLogout from "../images/logout-svgrepo-com.svg";
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
        window.location.reload();
    }

    const setDivLogout = () => {
        const divLogout = document.getElementById("hidden");

        const estiloDisplay = window.getComputedStyle(divLogout!).getPropertyValue("display");

        if (estiloDisplay === "none") {
            divLogout!.style.display = "block";
        } else {
            divLogout!.style.display = "none";
        } 
    }

    return (
        <header>
            <div className="div-img-logo">
                <img src={logo} className="image-logo"/>
            </div>
            {login ? (
                roleST === "customer" ? (
                        <div className="div-header">
                                <Link to={"/"} className="link-customer">Produtos</Link>
                                <Link to={"/customer/order"} className="link-customer">Meus Pedidos</Link>
                                <button
                                    type="button"
                                    onClick={ () => setDivLogout() }
                                    className="btn-login"
                                >
                                    Olá, { usernameST }
                                </button>
                                <div id="hidden">
                                    <div className="div-hidden">
                                        <button
                                            className="btn-logout"
                                            type="button"
                                            onClick={ () => logout() }
                                        >
                                            <object
                                                type="image/svg+xml"
                                                data={svgLogout}
                                                id="object-svg"
                                            ></object>
                                            Sair
                                        </button>
                                    </div>
                                    
                                </div>
                        </div>
                    ) : (
                        <div><p>teste para admin e vendedor</p></div>
                    )
                    ) : (
                            <button
                                type="button"
                                onClick={ () => navigate("/login") }
                                className="btn-login"
                            >
                                Login
                            </button>
                    )}
        </header>
    )
}

export default Header;