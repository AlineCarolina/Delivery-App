import { useContext, useState } from "react";
import Header from "../componets/Header";
import OrderProduct from "../componets/OrderProduct";
import { postData } from "../services/requests";
import DeliveryContext from "../context/deliveryContext";
import storageFuncs from "../utils/storageFuncs";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

function Checkout() {
    const [formCheckout, setFormCheckout] = useState({
        delivery_address: "",
        delivery_number: "",
    });
    const { total, cart, setCart } = useContext(DeliveryContext);
    const navigate = useNavigate();

    const handleChange = ({ value, name }: any) => {
        setFormCheckout((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    const finishOrder = async () => {
        const user = storageFuncs.get("user");
        if (!user) {
            navigate("/login")
        } else {
            const saleId = await postData(
                "/sale",
                {
                    saleInfo: {
                        user_id: user.newUser.id,
                        seller_id: 2,
                        total_price: Number(total.replace(",", ".")),
                        ...formCheckout,
                        status: "Pendente",
                    },
                    products: cart.map(({ id, quantity }: any) => ({ id, quantity })),
                },
            );
            setCart(null);
            localStorage.removeItem('cart');
            navigate(`/customer/order/${saleId}`)
        }
    }

    return (
        <>
            <Header/>
            <main className="main-checkout">
                <h1>Finalizar Pedido</h1>
                <OrderProduct removeBtn />
                <h2>Endereço para Entrega</h2>
                <div className="div-endereço">
                    <label htmlFor="delivery_address">
                        <h4>Rua</h4>
                        <input
                            type="text"
                            value={ formCheckout.delivery_address }
                            id="delivery_address"
                            name="delivery_address"
                            onChange={ (e) => handleChange(e.target) }
                        />
                    </label>
                    <label htmlFor="delivery_number">
                        <h4>Número</h4>
                        <input
                        id="delivery_number"
                        type="text"
                        value={ formCheckout.delivery_number }
                        name="delivery_number"
                        onChange={ (ev) => handleChange(ev.target) }
                        />
                    </label>
                    <button
                        type="button"
                        onClick={ () => finishOrder() }
                        disabled={ Object.values(formCheckout).some((value) => value === '') }
                        className="btn-finalizar"
                    >
                        Finalizar Pedido
                    </button>
                </div>
                <div>
                </div>
            </main>
        </>
    )
}

export default Checkout;