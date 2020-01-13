import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

//App Components
import Login from './components/signupsignin/Login';
import SignUp from './components/signupsignin/SignUp';
import Menu from './components/usermenu/Menu';
import UserOrder from './components/userorder/UserOrder';
import OrderSuccess from './components/userorder/OrderSuccess/OrderSuccess';
import AdminMenu from './components/admin/menu/AdminMenu';
// import SetUpMeal from './components/admin/MealSetup/SetUpMeal';
// import Sales from './components/admin/View Sales/Sales';



// toast for notification
toast.configure(
    {
        autoClose: 5000,
        closeOnClick: false,
        draggable: true,
        hideProgressBar: false,
        newestOnTop: true,
        pauseOnHover: true,
        pauseOnVisibilityChange: true,
        position: 'top-center',
        rtl: false,
    }
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 100vh;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export default class App extends Component{ 
    render() {
        return (
            <BrowserRouter>

                <Wrapper>
                    <Route exact path="/" component={ Login } />
                    <Route path="/register" component={ SignUp } />
                    <Route path="/usermenu" component={ Menu } />
                    <Route path="/userorder" component={ UserOrder } />
                    <Route path="/ordersuccess" component={ OrderSuccess } />
                    <Route path="/adminmenu" component={ AdminMenu } />
                    {/* <Route path="/adminmealsetup" component={ SetUpMeal } /> */}
                    {/* <Route path="/adminsales" component={ Sales } /> */}
                </Wrapper>

            </BrowserRouter>

    )}
}