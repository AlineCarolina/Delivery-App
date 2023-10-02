import React from "react";

type DeliveryContextType = {
    cart: any;
    setCart: any;
    setNewCartValue: any;
    total: any;
    setTotal: any;
};

const DeliveryContext = React.createContext({} as DeliveryContextType);

export default DeliveryContext;