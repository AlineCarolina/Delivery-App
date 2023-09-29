import { useEffect, useState } from "react";
import Header from "../componets/Header";
import { requestData, setToken } from "../services/requests";
import storageFuncs from "../utils/storageFuncs";
import { Link } from "react-router-dom";
import momentjs from 'moment';
import "../styles/Order.css";

function Order() {
    const [orders, setOrders] = useState([]);
    const [roleST, setRoleST] = useState("");
    const [linkTo, setLinkTo] = useState("");

    useEffect(() => {
        const getData = async () => {
            const clientId = storageFuncs.get("user");
            setRoleST(clientId.newUser.role)
            
            if (clientId.newUser.role === "customer") {
                const data = await requestData(`/sale/customer/${clientId.newUser.id}`);
                setOrders(data);
                setLinkTo("/customer/order/");
            } else {
                const data = await requestData(`/sale/seller/${clientId.newUser.id}`);
                setOrders(data);
                setLinkTo("/seller/order/");
            }
            
        }
        getData();
    }, []);

    useEffect(() => {
            const elementosStatus = document.querySelectorAll(".div-stt-ord");
            elementosStatus.forEach((elemento) => {
                const h3Status = elemento.querySelector("h3");
                if (h3Status) {
                    const textStatus = h3Status.textContent;
                    switch (textStatus) {
                        case "Pendente":
                            elemento.classList.add("pendente");
                            break;
                        case "Preparando":
                            elemento.classList.add("preparando");
                            break;
                        case "Entregue":
                            elemento.classList.add("entregue");
                            break;
                        case "Em Trânsito":
                            elemento.classList.add("transito");
                            break;
                    }
                }
            });
    }, [orders]);

    return (
        <>
            <Header/>
            <div className="div-order">
                { orders && orders.map((order: any) => (
                    <section key={order.id} className="section-order">
                        <Link to={ `${linkTo}${order.id}` } className="link-order">
                            <div className="div-nmr-ord">
                                <h2>{ `Pedido: ${order.id}` }</h2>
                            </div>
                            <div className="div-stt-ord" id="div-status">
                                <h3 id="h3-status">{ order.status }</h3>
                            </div>
                            <div className="div-date-ord">
                                <h3 className="h3-date">{ momentjs(order.sale_date).format('DD/MM/YYYY') }</h3>
                                <h3>R$ { order.total_price.replace('.', ',') }</h3>
                            </div>
                            {
                                roleST === "seller" && (
                                    <p>{`${order.delivery_address}, ${order.delivery_number}`}</p>
                                )
                            }
                        </Link>
                    </section>
                )) }
            </div>
        </>
    )
}

export default Order;