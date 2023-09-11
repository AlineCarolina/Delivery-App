import Header from "../componets/Header";
import OrderProduct from "../componets/OrderProduct";

function Checkout() {
    return (
        <>
            <Header/>
            <main>
                <h2>Finalizar Pedido</h2>
                <OrderProduct />
            </main>
        </>
    )
}

export default Checkout;