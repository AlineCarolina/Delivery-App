import { useParams } from "react-router-dom";
import Header from "../componets/Header";
import { putData, requestData } from "../services/requests";
import { useEffect, useState } from "react";
import momentjs from 'moment';
import OrderProduct from "../componets/OrderProduct";

function DetailsOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState<any[]>([]);

    useEffect(() => {
        requestData(`/sale/${id}`).then((data) => {
            setOrder(data as any[]);
        });
    }, []);

    const changeStatus = async ({ status }: any) => {
        await putData(`/sale/${order.id}`, { status });
        setOrder({ ...order, status });
      };

    return (
        <>
            <Header/>
            <main>
                { order && (
                    <div>
                        <h3>{ `Pedido ${order.id}` }</h3>
                        <h3>{ order.status }</h3>
                        <h3>{ momentjs(order.sale_date).format('DD/MM/YYYY') }</h3>

                        <button
                            type="button"
                            onClick={ () => changeStatus({ status: 'Entregue' }) }
                        >
                            Marcar como entregue
                        </button>
                    </div>
                ) }
                <h2>Detalhes do Pedido</h2>
                <OrderProduct removeBtn={false}/>
            </main>
        </>
    )
}

export default DetailsOrder;