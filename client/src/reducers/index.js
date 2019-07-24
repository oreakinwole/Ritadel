import { combineReducers} from 'redux';
import adminMenu from './adminMenu';
import meal from './meal';
import menu from './menu';
import user from './user';
import preOrder from './preorder';
import orders from './orders';


const reducers = combineReducers({
    adminMenu: adminMenu,
    meal: meal,
    menu: menu,
    user: user,
    preOrder: preOrder,
    orders: orders
});

export default reducers;
