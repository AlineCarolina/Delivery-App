import { useEffect, useState } from "react";
import Header from "../componets/Header";
import { requestData } from "../services/requests";
import storageFuncs from "../utils/storageFuncs";

function Order() {
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const clientId = storageFuncs.get("user");
            console.log(clientId.newUser.id);
            const data = await requestData(`/sale/customer/${clientId.newUser.id}`);
            console.log(data);
            setOrders(data);
        }
        getData();
    }, []);

    return (
        <>
            <Header/>
            { orders && orders.map((order) => (
                <section>

                </section>
            )) }
        </>
    )
}

export default Order;