import { useEffect, useState, useContext } from "react";
import storageFuncs from "../utils/storageFuncs";
import { useNavigate } from "react-router-dom";
import DeliveryContext from "../context/deliveryContext";

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
                (<div>
                    <h1>{ usernameST }</h1>
                    <button
                        type="button"
                        onClick={ () => logout() }
                    >
                        Sair
                    </button>
                </div> ) :
                <p>oi</p> }
        </header>
    )
}

export default Header;