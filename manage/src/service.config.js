const SERVERURL = 'http://localhost:3000/';

const URL = {
    getRegistUser: SERVERURL + 'user/getRegistUser',
    registManageUser: SERVERURL + 'manageuser/registManageUser',
    loginManageUser: SERVERURL + 'manageuser/loginManageUser',
    exitManageUser: SERVERURL + 'manageuser/exitManageUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getProductLists: SERVERURL + 'product/getProductLists',
    delProduct: SERVERURL + 'product/delProduct',
    addProduct: SERVERURL + 'product/addProduct',
    getOrder: SERVERURL + 'order/getOrder',
    updateStatu: SERVERURL + 'successorder/updateStatu',
    getSuccessOrders: SERVERURL + 'successorder/getSuccessOrders',
};

export default URL;