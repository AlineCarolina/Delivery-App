import { useParams } from "react-router-dom";
import Header from "../componets/Header";
import { putData, requestData } from "../services/requests";
import { useContext, useEffect, useState } from "react";
import momentjs from 'moment';
import OrderProduct from "../componets/OrderProduct";
import "../styles/DetailsOrder.css";
import DeliveryContext from "../context/deliveryContext";
import storageFuncs from "../utils/storageFuncs";
import loaderGif from "../images/loader.gif";

function DetailsOrder() {
    const { setCart, setTotalSeller, totalSeller } = useContext(DeliveryContext);
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [roleST, setRoleST] = useState("");
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const clientId = storageFuncs.get("user");
        setRoleST(clientId.newUser.role);

        const fetchData = async () => {
            const data = await requestData(`/sale/${id}`);
            setTimeout(() => {
                const totalPrice = data.total_price;
                const produtos = data.products.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: item.saleProduct.quantity,
                        url_image: item.url_image,
                        totalPrice,
                    }
                })
                setOrder(data);
                setCart(produtos);
                setTotalSeller(parseFloat(totalPrice).toFixed(2).replace(".", ","));
                setLoad(false)
            }, 2000)
        }
        fetchData();   
        }, []);

        useEffect(() => {
            const elementosStatus = document.getElementById("div-status-details");
            const h3Status = elementosStatus?.querySelector("h3");
            const textStatus = h3Status?.textContent;
                switch (textStatus) {
                    case "Pendente":
                        elementosStatus?.classList.add("pendente");
                        break;
                    case "Preparando":
                        elementosStatus?.classList.add("preparando");
                        break;
                    case "Entregue":
                        elementosStatus?.classList.add("entregue");
                        break;
                    case "Em Trânsito":
                        elementosStatus?.classList.add("transito");
                        break;
                }
        }, [order]);

    const changeStatus = async ({ status }: any) => {
        try {
            await putData(`/sale/${order.id}`, { status });
            setOrder({ ...order, status });
        } catch (error) {
            console.error("Erro ao atualizar status:", error);
        }
    };

    return (
        <>
            <Header/>
            { load ? (
                <img src={loaderGif} id="loader_gif"/>
            ) : (
            <main className="main-details">
            <h2>Detalhes do Pedido</h2>
                { order && (
                    <div className="div-main-details">
                        <h3>{ `Pedido ${order.id}` }</h3>
                        <h3>{ momentjs(order.sale_date).format('DD/MM/YYYY') }</h3>
                        <div id="div-status-details">
                            <h3>{ order.status }</h3>
                        </div>
                        {
                            roleST === "customer" && (
                                <button
                                type="button"
                                onClick={ () => changeStatus({ status: 'Entregue' }) }
                                className="btn-entregue"
                                >
                                    Marcar como entregue
                                </button>
                            )
                        }
                        {
                            roleST === "seller" && (
                                <>
                                    <button
                                    type="button"
                                    onClick={ () => changeStatus({ status: 'Preparando' }) }
                                    className="btn-entregue"
                                    >
                                        Preparar Pedido
                                    </button>
                                    <button
                                    type="button"
                                    onClick={ () => changeStatus({ status: 'Em Trânsito' }) }
                                    className="btn-entregue"
                                    >
                                        Saiu para entrega
                                    </button>
                                </>
                            )
                        }
                    </div>
                ) }
                <div className="div-order-detail-product">
                    <OrderProduct removeBtn={false}/>
                </div>
            </main>
            )}
        </>
    )
}

export default DetailsOrder;
