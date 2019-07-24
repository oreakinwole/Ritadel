import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MealActionCreators from '../../../actions/meal';
import Header from '../../usermenu/Header';
import MealList from './MealList';
import Form from './RightForm';
import Nav from './BottomNav';


class SetUpMeal extends Component {

      static propTypes = {
            meals: PropTypes.array.isRequired
      };

      componentDidMount() {
            this.props.getAllMeals();
      }

      render() {
            const { meals } = this.props;

            const mealComponents = meals.map((meal, index) => (

                  <MealList
                        index= { index } 
                        name = {meal.name}
                        price = { parseInt(meal.price) }
                        key = {meal.name}
                  />
            ));

            return  (
                        <div>
                              <Header  headerTitle="Setup"/>
                  
                        <section className="meal_table">
                              
                        <aside className ="Available_Meals">

                              <h2> All Meals </h2>
                                    
                                    { mealComponents }
                        
                        </aside> 
                              
                              <Form />
                                                
                                                
                  </section>
                              
                        <Nav clearAll = {this.props.clearMeals}/>
                              
                        </div>
                              );
      }
}

const mapStateToProps = state => (
      {
            meals: state.meal
      }
);


const mapDispatchToProps = dispatch => {
      
  return {
      clearMeals: bindActionCreators(MealActionCreators.clearMeals, dispatch),
      getAllMeals: bindActionCreators(MealActionCreators.getMeals, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SetUpMeal);