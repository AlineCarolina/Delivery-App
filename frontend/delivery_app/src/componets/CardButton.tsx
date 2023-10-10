import { useState, useContext, useEffect } from "react";
import DeliveryContext from "../context/deliveryContext";
import "../styles/CardButton.css";

function CardButton({ product }: any) { //obj
    const [quantity, setQuantity] = useState(0);
    const { cart, setNewCartValue } = useContext(DeliveryContext);

    useEffect(() => {
        try {
            const qnt = cart.find(({ id }: any) => id === product.id).quantity;
            setQuantity(qnt);
        } catch (error) {
            setQuantity(0);
        }
    }, [cart, product])

    const handleQuantity = (newQuantity: any) => {
        setQuantity(newQuantity);
        const setValue = { ...product, quantity: newQuantity };
        if (!cart.length) return setNewCartValue([setValue]);

        try {
            const alreadyOnCart = cart.find(({ id }: any) => id === product.id);
            alreadyOnCart.quantity = newQuantity;
            setNewCartValue(cart.map((pr: any) => (pr.id === product.id ? setValue : pr)));
        } catch (error) {
            setNewCartValue([...cart, setValue]);
        }
    }

    return (
        <div className="div-btns">
            <button
                onClick={ () => handleQuantity(quantity -1 < 0 ? 0 : quantity -1) }
                type="button"
                className="btn-card"
            >
                -
            </button>
            <input
                className="card-input"
                type="number"
                min={0}
                value={ quantity || 0 }
                onChange={ (ev) => handleQuantity(ev.target.value) }
            />
            <button
                onClick={ () => handleQuantity(quantity + 1) }
                type="button"
                className="btn-card"
            >
                +
            </button>
        </div>
    )
}

export default CardButton;