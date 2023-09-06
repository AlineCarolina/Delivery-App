import { useEffect } from "react";
import CardProduct from "../componets/CardProduct";
import { useNavigate } from "react-router-dom";
import { setToken } from "../services/requests";
import Header from "../componets/Header";

function Products() {
    const navigate = useNavigate();

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : null;
        if (null) return navigate("/login");
        setToken(user.token)
    });

    return (
        <>
            <Header />
            <CardProduct />
        </>
    )
}

export default Products;
