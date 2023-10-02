import { useEffect, useState } from "react";
import DeliveryContext from "../context/deliveryContext";
import storageFuncs from "../utils/storageFuncs";

function DeliveryProvider({ children }: any) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0.00);

    useEffect(() => {
        const cartStorage = storageFuncs.get("cart");
        setCart(cartStorage || []);
        setTotal(storageFuncs.getTotal(cartStorage) || 0.0);
    }, []);

    const setNewCartValue = (newValue: any) => {
        const newCartValue = newValue.filter(({ quantity }: any) => quantity !== 0);
        setCart(newCartValue);
        storageFuncs.set("cart", newCartValue);
    };
    
    useEffect(() => {
        setTotal(storageFuncs.getTotal(cart));
    }, [cart]);

    return (
        <DeliveryContext.Provider
            value={ {
                cart,
                setCart,
                setNewCartValue,
                total,
                setTotal,
            } }
        >
            { children }
        </DeliveryContext.Provider>
    )
}

export default DeliveryProvider;