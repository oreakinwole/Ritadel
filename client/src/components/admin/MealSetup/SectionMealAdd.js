import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class AddMeal extends Component {
      
    static propTypes = {
        addMeal: PropTypes.func.isRequired
    };

    state = {
          // to handle form state for the Add meal section
          nameAdd: '',
          priceAdd: ''
    };
    

      //methods used by the Add Meal section only
      onMealNameChange = (e) => {
          const name = e.target.value;
          this.setState({ nameAdd: name });
      };

      onMealPriceChange = (e) => {
          const price = e.target.value;
          this.setState({ priceAdd: price });
      };

      addMealMethod = () => {                 
        this.props.addMeal(this.state.nameAdd, this.state.priceAdd);
        this.setState( { nameAdd: '', priceAdd: '' });
      };
      
    


    render() {


        return (
            //   Add Meal Section
          <div> 

            <input 
            type="text" 
            name="new_meal"
            value={this.state.nameAdd}
            onChange={this.onMealNameChange}
            placeholder="Add New Meal" 
            />

            <input 
            type="text" 
            name="newmeal_price"
            value={this.state.priceAdd}
            onChange={this.onMealPriceChange}
            placeholder="Set price for new meal" 
            />

            <button className="btn" onClick={ this.addMealMethod }> Add </button>
                        

          </div>
        );
    }

}
