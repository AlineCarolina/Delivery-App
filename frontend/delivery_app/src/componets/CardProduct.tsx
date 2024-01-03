import { useState, useEffect, useContext } from "react";
import { requestData } from "../services/requests";
import Products from "../types/types";
import CardButton from "./CardButton";
import DeliveryContext from "../context/deliveryContext";
import "../styles/CardProduct.css"
import { useNavigate } from "react-router-dom";
import svgCart from "../images/shopping-cart-outline-svgrepo-com.svg";
import storageFuncs from "../utils/storageFuncs";
import loaderGif from "../images/loader.gif";

function CardProduct() {
    const [products, setProducts] = useState<Products[]>([]);
    const { total, setTotal } = useContext(DeliveryContext);
    const navigate = useNavigate();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await requestData("/products");
            setTimeout(() => {
                setProducts(response);
                setLoad(false);
            }, 2000);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const cartStorage = storageFuncs.get("cart");
        if (!cartStorage) {
            setTotal("0,00")
        }

        const cartBtn = document.getElementById("cart-btn");
        if (total === "0,00") {
            cartBtn!.style.display = "none";
        } else {
            cartBtn!.style.display = "block";
        }
    }, [total]);

    const handleClick = () => {
        const userData = storageFuncs.get("user");
        if(!userData) {
            navigate("/login")
        } else {
            navigate("/customer/checkout")
        }
    };

    return (
        <div className="div_page_products">
            { load ? (
                <img src={loaderGif} id="loader_gif"/>
            ) : 
            (
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
                                R$ { item.price }
                            </p>
                            <CardButton product={ item }/>
                        </div>
                    </div>
                ))
            ) }
            <button
                id="cart-btn"
                type="button"
                onClick={ () => handleClick() }
                disabled={ total === '0,00' }
            >
                <div className="div-cart-btn">
                    <object type="image/svg+xml" data={svgCart} className="svgCart"></object>
                    <span>{`R$: ${total}`}</span>
                </div>
                
            </button>
        </div>
    )
}

export default CardProduct;