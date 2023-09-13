import { useEffect, useState } from "react";
import Header from "../componets/Header";
import { requestData } from "../services/requests";
import storageFuncs from "../utils/storageFuncs";
import { Link } from "react-router-dom";
import momentjs from 'moment';

function Order() {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            const clientId = storageFuncs.get("user");
            console.log(clientId.newUser.id);
            const data = await requestData(`/sale/customer/${clientId.newUser.id}`);
            setOrders(data as any[]);
            console.log(orders);
        }
        getData();
    }, []);

    return (
        <>
            <Header/>
            { orders && orders.map((order: any) => (
                <section key={order.id}>
                    <Link to={ `/customer/order/${order.id}` }>
                        <div>
                            <h2>{ `Pedido: ${order.id}` }</h2>
                        </div>
                        <div>
                            <h3>{ order.status }</h3>
                        </div>
                        <div>
                            <h3>{ momentjs(order.sale_date).format('DD/MM/YYYY') }</h3>
                            <h3>{ order.total_price.replace('.', ',') }</h3>
                        </div>
                    </Link>
                </section>
            )) }
        </>
    )
}

export default Order;