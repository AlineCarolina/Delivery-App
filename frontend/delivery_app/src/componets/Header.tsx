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

    useEffect(() => {
        const userData = storageFuncs.get("user");
        if (!userData) return navigate("/");
        setUsernameST(userData.newUser.username);
        setRoleST(userData.newUser.role);
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setCart(null);
        localStorage.removeItem("cart");
        navigate("/");
    }


    return (
        <header>
            { roleST === "customer" ?
                (<div className="div_header">
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
                    
                </div> ) :
                <p>oi</p> }
        </header>
    )
}

export default Header;