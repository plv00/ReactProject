import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getTrainersQuery, addPokemonMutation, getPokemonsQuery } from '../queries/queries';

class AddPokemon extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      type: '',
      description: '',
      trainerId: ''
    };
  }

  displayTrainers(){
    var data = this.props.getTrainersQuery;
    if(data.loading){
      return( <option disabled>Loading Trainer...</option>);
    } else {
      return data.trainers.map(trainer => {
        return(<option key={trainer.id} value={trainer.id}>{trainer.name}</option>);
      });
    }
  }
  
  submitForm(e){
    //prevent page refresh when submit is pressed
    e.preventDefault()
    this.props.addPokemonMutation({
      variables: {
        name: this.state.name,
        type: this.state.type,
        description: this.state.description,
        trainerId: this.state.trainerId
      },
      refetchQueries: [{ query: getPokemonsQuery}]
    });

  }

  render(){
    return(
      <form id="add-pokemo" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
        <label>Pokemon Name:</label>
        <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
        </div>
        <div className="field">
        <label>Type:</label>
        <input type="text" onChange={(e) => this.setState({type: e.target.value})}/>
        </div>
        <div className="field">
        <label>Description:</label>
        <input type="text" onChange={(e) => this.setState({description: e.target.value})}/>
        </div>
        <div className="field">
        <label>Trainer:</label>
        
        <select onChange={(e) => this.setState({trainerId: e.target.value})} >
          <option>Select Trainer</option>
          {this.displayTrainers()}
        </select>
        </div>
        <button>Add</button>
        
      </form>
    );
  }
}

export default compose(
  graphql(getTrainersQuery, {name: "getTrainersQuery"}),
  graphql(addPokemonMutation, {name: "addPokemonMutation"})
)(AddPokemon);






