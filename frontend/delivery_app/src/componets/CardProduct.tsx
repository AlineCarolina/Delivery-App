import { useState, useEffect, useContext } from "react";
import { requestData } from "../services/requests";
import Products from "../types/types";
import CardButton from "./CardButton";
import DeliveryContext from "../context/deliveryContext";

function CardProduct() {
    const [products, setProducts] = useState<Products[]>([]);
    const { total } = useContext(DeliveryContext);

    useEffect(() => {
        requestData("/products").then((data) => setProducts(data));
    }, []);

    return (
        <>
            {
                products && products.map((item) => (
                    <div key={ item.id }>
                        <div>
                            <p>
                                { item.price }
                            </p>
                            <img
                                src={ item.url_image }
                                alt={ item.name }
                            />
                        </div>
                        <div>
                            <h1>{ item.name }</h1>
                            <CardButton product={ item }/>
                        </div>
                    </div>
                ))
            }
            <h2>{ total }</h2>
        </>
    )
}

export default CardProduct;