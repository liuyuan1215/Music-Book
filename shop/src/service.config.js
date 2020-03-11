const MOCKURL = 'http://www.liuliu.com/';
const SERVERURL = 'http://localhost:3000/';

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    getHotProduct: MOCKURL + 'getHotProduct',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    exitUser: SERVERURL + 'user/exitUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart',
    delCart: SERVERURL + 'cart/delCart',
    addStar: SERVERURL + 'star/addStar',
    getStar: SERVERURL + 'star/getStar',
    delStar: SERVERURL + 'star/delStar',
    delAllStar: SERVERURL + 'star/delAllStar',
    getProductList: SERVERURL + 'product/getProductList',
    submitOrder: SERVERURL + 'product/submitOrder',
    getOrder: SERVERURL + 'product/getOrder',
    delOrder: SERVERURL + 'product/delOrder',
    addAddress: SERVERURL + 'address/addAddress',
    getAddress: SERVERURL + 'address/getAddress',
    delAddress: SERVERURL + 'address/delAddress',
};

export default URL;