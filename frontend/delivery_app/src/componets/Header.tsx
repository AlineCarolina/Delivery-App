import { useEffect, useState, useContext } from "react";
import storageFuncs from "../utils/storageFuncs";
import { Link, useNavigate } from "react-router-dom";
import DeliveryContext from "../context/deliveryContext";
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
            {login ? (
                roleST === "customer" ? (
                        <div className="div_header">
                            <div>
                                <Link to={"/customer/products"}>Produtos</Link>
                                <Link to={"/customer/order"}>Meus Pedidos</Link>
                            </div>
                            <div className="div_header_info_user">
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
                        <div>
                            <button
                                type="button"
                                onClick={ () => navigate("/login") }
                            >
                                Login
                            </button>
                        </div>
                    )}
        </header>
    )
}

export default Header;