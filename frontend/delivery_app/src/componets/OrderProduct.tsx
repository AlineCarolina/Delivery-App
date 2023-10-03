import { useContext, useEffect, useState } from "react";
import DeliveryContext from "../context/deliveryContext";
import "../styles/OrderProduct.css";
import storageFuncs from "../utils/storageFuncs";

function OrderProduct({ removeBtn }:any) {
    const { cart, setCart, total, totalSeller } = useContext(DeliveryContext);
    const [roleST, setRoleST] = useState("");

    useEffect(() => {
            const clientId = storageFuncs.get("user");
            setRoleST(clientId.newUser.role);
        }, []);

    return (
        <div className="div-order-product">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário</th>
                        <th>Sub-total</th>
                        { removeBtn && <th>Remover Item</th> }
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
                                        { removeBtn && (
                                            
                                        <td>
                                                <button
                                                    className="btn-remove-item"
                                                    type="button"
                                                    onClick={ () => setCart(cart.filter(({id}: any) => id !== product.id)) }
                                                >
                                                    Remover
                                                </button>
                                                
                                        </td>
                                        )  
                                        }
                                </tr>
                            ) ) }
                        </>
                    ) }
                </tbody>
            </table>
            <div className="div-h2-total">
                {
                    roleST === "customer" && (
                        <h2 className="h2-total">{`Total: R$ ${total}`}</h2>
                    )
                }
                {
                    roleST === "seller" && (
                        <h2 className="h2-total">{`Total: R$ ${totalSeller}`}</h2>
                    )
                }
            </div>
        </div>
    )
}

export default OrderProduct;