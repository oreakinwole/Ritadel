import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModMealList from './ModMealList';


export default class ModifyMeal extends Component {
      
    static propTypes = {
        meals: PropTypes.array.isRequired,
        updateMeal: PropTypes.func.isRequired
    };

    state = {
        // to handle form state for the update meal section
        selectedIndexUpdate: '',
        nameUpdate: '',
        priceUpdate: '',
        indexModId: ''
    };
    

        //methods used by the update Meal section only
        onMealNameChangeUpdate = (e) => {
            this.setState({ nameUpdate: e.target.value });
        };

        onMealPriceChangeUpdate = (e) => {
            this.setState({ priceUpdate: e.target.value });
        };

        handleSelectUpdate = event => {
            const index = event.nativeEvent.target.selectedIndex;
            this.setState({ selectedIndexUpdate: index});

            const targs = this.props.meals[index];
        
            this.setState({ indexModId: targs._id });
        };
      
        updateMealMethod = () => {           
            this.props.updateMeal(this.state.indexModId, this.state.selectedIndexUpdate, this.state.nameUpdate, this.state.priceUpdate); 
            // this.setState( { indexModId: '', selectedIndexUpdate: '', nameUpdate: '', priceUpdate: '' });
        };
    


    render() {

         //Select input for the modify meal section
         const SelectMod =    
            this.props.meals.map((meal, index) => (

                <ModMealList
                    index = { index } 
                    name = { meal.name }
                    key={ index }  
                    
                />
            ));

        return (
            <div>
            <h2> Modify a meal </h2>

            <select onChange={this.handleSelectUpdate}> 
            
                  { SelectMod }

            </select>

            <input 
                  type="text" 
                  name="alt_name"
                  value={this.state.nameUpdate}
                  onChange={this.onMealNameChangeUpdate} 
                  placeholder="Replace with" 
            />
            
            <input 
                  type="text" 
                  name="altname_price"
                  value={this.state.priceUpdate}
                  onChange={this.onMealPriceChangeUpdate} 
                  placeholder="Set price of meal" 
            />

            <button className="btn" onClick={ this.updateMealMethod } > Confirm </button>
            </div>
        );
    }

}
