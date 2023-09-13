import { useState, useEffect, useContext } from "react";
import { requestData } from "../services/requests";
import Products from "../types/types";
import CardButton from "./CardButton";
import DeliveryContext from "../context/deliveryContext";
import "../styles/CardProduct.css"
import { useNavigate } from "react-router-dom";

function CardProduct() {
    const [products, setProducts] = useState<Products[]>([]);
    const { total } = useContext(DeliveryContext);
    const navigate = useNavigate();

    useEffect(() => {
        requestData("/products").then((data) => setProducts(data));
    }, []);

    return (
        <div className="div_page_products">
            {
                products && products.map((item) => (
                    <div key={ item.id } className="div_item_product">
                        <div>
                            <img
                                src={ item.url_image }
                                alt={ item.name }
                                className="img_item_product"
                            />
                        </div>
                        <div>
                            <p className="title_item_product">{ item.name }</p>
                            <p className="price_item_product">
                                { item.price }
                            </p>
                            <CardButton product={ item }/>
                        </div>
                    </div>
                ))
            }
            <button
                type="button"
                onClick={ () => navigate('/customer/checkout') }
                disabled={ total === '0,00' }
            >
                {'Ver Carrinho: '}
                <span>{`R$: ${total}`}</span>
            </button>
        </div>
    )
}

export default CardProduct;