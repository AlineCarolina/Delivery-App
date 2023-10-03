import React from "react";

type DeliveryContextType = {
    cart: any;
    setCart: any;
    setNewCartValue: any;
    total: any;
    setTotal: any;
    totalSeller: any;
    setTotalSeller: any;
};

const DeliveryContext = React.createContext({} as DeliveryContextType);

export default DeliveryContext;