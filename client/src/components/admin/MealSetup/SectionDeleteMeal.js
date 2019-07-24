import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModMealList from './ModMealList';


export default class DeleteMeal extends Component {
      
    static propTypes = {
        meals: PropTypes.array.isRequired,
        removeMeal: PropTypes.func.isRequired
    };

    state = {
        // to handle from state for the delete meal section
        selectedIndexDel: "",
        indexDelId: ""
    };

    getIndex = event => {
        
        const index = event.nativeEvent.target.selectedIndex;
        this.setState({selectedIndexDel: index });

        const targs = this.props.meals[index];
        
        this.setState({ indexDelId: targs._id });
     }; 
    
    

    render() {

        const selectHandle = 
            this.props.meals.map((meal, index) => (

            <ModMealList
                index = { index } 
                name = { meal.name }
                key={ index } 
            
            />

            ));
                            

    return (
    <div>
                    
            <h2>Delete a meal</h2>               

            <select onChange ={this.getIndex}>
        

            { selectHandle }

            </select>
            
        <button  className="btn" onClick={ () => this.props.removeMeal(this.state.indexDelId, this.state.selectedIndexDel) }  > Delete </button>
        
    </div>
    );
    }

}
