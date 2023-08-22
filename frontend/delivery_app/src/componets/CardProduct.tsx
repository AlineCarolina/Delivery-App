import { useState, useEffect } from "react";
import { requestData } from "../services/requests";
import Products from "../types/types";

function CardProduct() {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        requestData("/products").then((data) => setProducts(data));
    }, []);

    return (
        <>
            {
                products && products.map((item) => (
                    <div key={ item.id }>
                        <p>
                            { item.price }
                        </p>
                        <img
                            src={ item.url_image }
                            alt={ item.name }
                        />
                    </div>
                ))
            }
        </>
    )
}

export default CardProduct;