import { useEffect } from "react";
import CardProduct from "../componets/CardProduct";
import { useNavigate } from "react-router-dom";
import Header from "../componets/Header";
import storageFuncs from "../utils/storageFuncs";

function Products() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = storageFuncs.get("user");
        if (user == null) return navigate("/login");
    });

    return (
        <>
            <Header />
            <CardProduct />
        </>
    )
}

export default Products;
