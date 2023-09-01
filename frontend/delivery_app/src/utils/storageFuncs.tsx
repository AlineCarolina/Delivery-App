const storageFuncs = {
  set: (key: any, payload: any) => localStorage.setItem(key, JSON.stringify(payload)),

  get: (key: any) => {
    const itemStr = localStorage.getItem(key)
    return itemStr ? JSON.parse(itemStr) : null
  },

  getTotal: (cart: any) => {
      try {
        return cart.reduce((total: any, { quantity, price }: any) => total
        + (quantity * price), 0).toFixed(2).replace('.', ',');
      } catch (error) {
        return '0,00';
      }
    },
}

export default storageFuncs;