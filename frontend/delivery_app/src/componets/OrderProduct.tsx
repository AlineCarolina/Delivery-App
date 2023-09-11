import { useContext } from "react";
import DeliveryContext from "../context/deliveryContext";

function OrderProduct() {
    const { cart, setCart, total } = useContext(DeliveryContext);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário</th>
                        <th>Sub-total</th>
                        <th>Remover Item</th>
                    </tr>
                </thead>
                <tbody>
                    { cart && (
                        <>
                            { cart.map((product: any, index: any) => (
                                <tr key={ product.id }>
                                    <td>{ index + 1 }</td>
                                    <td>{ product.name }</td>
                                    <td>{ product.quantity }</td>
                                    <td>{ product.price.replace(".", ",") }</td>
                                    <td>{( product.quantity * product.price ).toFixed(2).replace(".", ",")}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={ () => setCart(cart.filter(({id}: any) => id !== product.id)) }
                                        >
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            ) ) }
                        </>
                    ) }
                </tbody>
            </table>
            <div>
                <h2>{`Total: R${total}`}</h2>
            </div>
        </>
    )
}

export default OrderProduct;