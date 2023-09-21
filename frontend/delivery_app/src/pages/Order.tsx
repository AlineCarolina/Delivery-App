import { useEffect, useState } from "react";
import Header from "../componets/Header";
import { requestData } from "../services/requests";
import storageFuncs from "../utils/storageFuncs";
import { Link } from "react-router-dom";
import momentjs from 'moment';
import "../styles/Order.css";

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
            <div className="div-order">
                { orders && orders.map((order: any) => (
                    <section key={order.id} className="section-order">
                        <Link to={ `/customer/order/${order.id}` } className="link-order">
                            <div className="div-nmr-ord">
                                <h2>{ `Pedido: ${order.id}` }</h2>
                            </div>
                            <div className="div-stt-ord">
                                <h3>{ order.status }</h3>
                            </div>
                            <div className="div-date-ord">
                                <h3 className="h3-date">{ momentjs(order.sale_date).format('DD/MM/YYYY') }</h3>
                                <h3>R$ { order.total_price.replace('.', ',') }</h3>
                            </div>
                        </Link>
                    </section>
                )) }
            </div>
        </>
    )
}

export default Order;