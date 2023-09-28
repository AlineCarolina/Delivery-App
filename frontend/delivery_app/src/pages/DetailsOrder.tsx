import { useParams } from "react-router-dom";
import Header from "../componets/Header";
import { putData, requestData } from "../services/requests";
import { useContext, useEffect, useState } from "react";
import momentjs from 'moment';
import OrderProduct from "../componets/OrderProduct";
import "../styles/DetailsOrder.css";
import DeliveryContext from "../context/deliveryContext";

function DetailsOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const { getSaleDetails, getSale } = useContext(DeliveryContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                await getSaleDetails(id);
                setOrder(getSale);
            } catch (error) {
                console.error("Erro ao obter detalhes do pedido:", error);
            }
        };

        fetchData();
        }, [id, getSaleDetails]);

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
        }, [order])

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
            <main className="main-details">
            <h2>Detalhes do Pedido</h2>
                { order && (
                    <div className="div-main-details">
                        <h3>{ `Pedido ${order.id}` }</h3>
                        <h3>{ momentjs(order.sale_date).format('DD/MM/YYYY') }</h3>
                        <div id="div-status-details">
                            <h3>{ order.status }</h3>
                        </div>

                        <button
                            type="button"
                            onClick={ () => changeStatus({ status: 'Entregue' }) }
                            className="btn-entregue"
                        >
                            Marcar como entregue
                        </button>
                    </div>
                ) }
                <div className="div-order-detail-product">
                    <OrderProduct removeBtn={false}/>
                </div>
            </main>
        </>
    )
}

export default DetailsOrder;