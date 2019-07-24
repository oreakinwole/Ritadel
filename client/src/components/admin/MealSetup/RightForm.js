import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MealActionCreators from '../../../actions/meal';
import AddMeal from './SectionMealAdd';
import ModifyMeal from './SectionModifyMeal';
import DeleteMeal from './SectionDeleteMeal';


class Form extends Component {
      
    static propTypes = {
        meals: PropTypes.array.isRequired,
    };

    

    render() {

            const { dispatch, meals} = this.props;
            const addMeal = bindActionCreators(MealActionCreators.addMeal, dispatch);
            const removeMeal = bindActionCreators(MealActionCreators.removeMeal, dispatch);
            const updateMeal = bindActionCreators(MealActionCreators.updateMeal, dispatch);
            

        return (
      
      <div className="rightform"> 
           {/* Add Meal Section */}
            
            < AddMeal addMeal={ addMeal }/>
                        
            <div className="input-field">

            <ModifyMeal meals= {meals} updateMeal= {updateMeal}/>

                  <br/>
                  <br/>
            <DeleteMeal meals={meals} removeMeal= {removeMeal} />

            </div>

      </div>
        );
    }

}

const mapStateToProps = state => (
      {
            meals: state.meal
      }
);

export default connect(mapStateToProps)(Form);