import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// import * as MealActionCreators from './actions/meal';
// import { connect } from 'react-redux';

//App Components

import Login from './components/signupsignin/Login';
import SignUp from './components/signupsignin/SignUp';
import Menu from './components/usermenu/Menu';
import UserOrder from './components/userorder/UserOrder';
import AdminMenu from './components/admin/menu/AdminMenu';
import SetUpMeal from './components/admin/MealSetup/SetUpMeal';
import Sales from './components/admin/View Sales/Sales';

export default class App extends Component{ 
   
    

    render() {

    return (
    <BrowserRouter>

        <div className="big_wrapper">
            <Route exact path="/" component={ Login } />
            <Route path="/register" component={ SignUp } />
            <Route path="/usermenu" component={ Menu } />
            <Route path="/userorder" component={ UserOrder } />
            <Route path="/adminmenu" component={ AdminMenu } />
            <Route path="/adminmealsetup" component={ SetUpMeal } />
            <Route path="/adminsales" component={ Sales } />
        </div>

    </BrowserRouter>

    )}

}