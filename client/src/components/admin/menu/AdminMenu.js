import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AdminMenuActionCreators from '../../../actions/adminMenu';
import Header from '../../usermenu/Header';
import MenuTable from './AdminMenuTable';
import BottomNav from './BottomNav';


class AdminMenu extends Component {

    static propTypes = {
      adMenu: PropTypes.array.isRequired,
    };
  
    componentDidMount() {
      this.props.getMealsAsMenu();
    }

    render() { 
  
      const { adMenu } = this.props;

      
  
  
      const Menu =  adMenu.map((item, index) => 
  
        <MenuTable
              id = { item._id }
              index = {index} 
              name = {item.name}
              price={item.price}
              key={item.name}
              postItem = { this.props.postItem } 
        
        />
    );
  
      return (
        <div>     

        <Header  headerTitle="Menu"/>
    
    
    <section className="meal_table">
        <table>
            <tbody>
    
        { Menu }
    
            </tbody>
               
        </table>
               <a href="/" className="btn addremove reload_done">Reload</a>
                <button className="btn addremove reload_done">Done</button>
        
    </section>
            
           
        <BottomNav theMenu={ adMenu } clearEvery={ this.props.clearMenu } />
            
        </div>
              );
            }
  }
  
  const mapStateToProps = state => (
    {
          adMenu: state.adminMenu
    }
  
  );

  const mapDispatchToProps = dispatch => {
    return {

       postItem: bindActionCreators(AdminMenuActionCreators.postMeal, dispatch),
       clearMenu: bindActionCreators(AdminMenuActionCreators.clearMenu, dispatch),
       getMealsAsMenu: bindActionCreators(AdminMenuActionCreators.getMealsfromDbAsMenu, dispatch)

    }
  }
   
  export default connect(mapStateToProps, mapDispatchToProps)(AdminMenu);

