import { useEffect, useState } from "react";
import Header from "../componets/Header";
import { requestData } from "../services/requests";
import storageFuncs from "../utils/storageFuncs";
import { Link } from "react-router-dom";
import momentjs from 'moment';
import "../styles/Order.css";
import loaderGif from "../images/loader.gif";

function Order() {
    const [orders, setOrders] = useState([]);
    const [roleST, setRoleST] = useState("");
    const [linkTo, setLinkTo] = useState("");
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const clientId = storageFuncs.get("user");
            setRoleST(clientId.newUser.role);
            
            if (clientId.newUser.role === "customer") {
                const data = await requestData(`/sale/customer/${clientId.newUser.id}`);
                setTimeout(() => {
                    setOrders(data);
                    setLinkTo("/customer/order/");
                    setLoad(false);
                }, 2000)
                
            } else {
                const data = await requestData(`/sale/seller/${clientId.newUser.id}`);
                setTimeout(() => {
                    setOrders(data);
                    setLinkTo("/seller/order/");
                    setLoad(false);
                }, 2000)
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
                { load ? (
                <img src={loaderGif} id="loader_gif"/>
            ) : 
            (
                orders && orders.map((order: any) => (
                    <section key={order.id} className="section-order">
                        <Link to={ `${linkTo}${order.id}` } className="link-order">
                            <div className="div-nmr-ord">
                                <h2>{ `Pedido: ${order.id}` }</h2>
                            </div>
                            <div className="div-stt-ord" id="div-status">
                                <h3 id="h3-status">{ order.status }</h3>
                            </div>
                            <div className="div-date-ord">
                                <p className="h3-date">{ momentjs(order.sale_date).format('DD/MM/YYYY') }</p>
                                <p>R$ { order.total_price.replace('.', ',') }</p>
                            </div>
                        </Link>
                        {
                                roleST === "seller" && (
                                    <div className="order-address">
                                        <p>Endereço: {`${order.delivery_address}, ${order.delivery_number}`}</p>
                                    </div>
                                )
                            }
                    </section>
                ))) }
            </div>
        </>
    )
}

export default Order;