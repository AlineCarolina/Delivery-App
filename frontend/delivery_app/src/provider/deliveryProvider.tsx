import { useEffect, useState } from "react";
import DeliveryContext from "../context/deliveryContext";
import storageFuncs from "../utils/storageFuncs";
import { requestData } from "../services/requests";

function DeliveryProvider({ children }: any) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0.00);
    const [getSale, setGetSale] = useState([]);

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

    const getSaleDetails = async (id:any) => {
        await requestData(`/sale/${id}`).then((data) => {
            setGetSale(data)
        return data
        });
    }

    return (
        <DeliveryContext.Provider
            value={ {
                cart,
                setCart,
                setNewCartValue,
                total,
                getSaleDetails,
                getSale,
            } }
        >
            { children }
        </DeliveryContext.Provider>
    )
}

export default DeliveryProvider;